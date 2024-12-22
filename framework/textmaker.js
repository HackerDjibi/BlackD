const cheerio = require("cheerio");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const FormData = require("form-data");
const cookie = require("cookie");

const textMaker = async (url, texts, radioOption = '') => {
  texts = texts.split(";");

  // Initial GET request to retrieve token and server data
  const initialResponse = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });

  const initialHtml = await initialResponse.text();
  const initialCookies = initialResponse.headers.get("set-cookie").split(",").map(cookie.parse).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  const sessionCookies = Object.entries({
    __cfduid: initialCookies.__cfduid,
    PHPSESSID: initialCookies.PHPSESSID,
  })
    .map(([key, value]) => cookie.serialize(key, value))
    .join("; ");

  const $ = cheerio.load(initialHtml);
  const token = $("input[name=\"token\"]").attr("value");
  const buildServer = $("input[name=\"build_server\"]").attr("value");
  const buildServerId = $("input[name=\"build_server_id\"]").attr("value");

  // Prepare the POST request with form data
  const formData = new FormData();
  texts.forEach(text => formData.append("text[]", text.trim()));
  formData.append("submit", "Go");
  if (radioOption) {
    formData.append("radio0[radio]", radioOption);
  }
  formData.append("token", token);
  formData.append("build_server", buildServer);
  formData.append("build_server_id", buildServerId);

  // Send the POST request
  const postResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      "Cookie": sessionCookies,
      ...formData.getHeaders(),
    },
    body: formData.getBuffer(),
  });

  const postHtml = await postResponse.text();
  const postResult = cheerio.load(postHtml);

  const resultValue = url.includes("en.ephoto360.com")
    ? postResult("input[name=\"form_value_input\"]").attr("value")
    : postResult("#form_value").first().text();

  if (!resultValue) {
    return { status: false };
  }

  const resultData = JSON.parse(resultValue);

  // Prepare final POST request to create the image
  const finalFormData = new FormData();
  finalFormData.append("id", resultData.id);
  resultData.text.forEach(text => finalFormData.append("text[]", text));
  finalFormData.append("token", resultData.token);
  finalFormData.append("build_server", resultData.build_server);
  finalFormData.append("build_server_id", resultData.build_server_id);
  if (resultData.radio0) {
    finalFormData.append("radio0[radio]", resultData.radio0.radio);
  }

  const finalResponse = await fetch(`${buildServer}effect/create-image`, {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      "Cookie": sessionCookies,
      ...finalFormData.getHeaders(),
    },
    body: finalFormData.getBuffer(),
  });

  const finalResult = await finalResponse.json();

  if (!finalResult.image) {
    throw new Error("textmaker: failed image processing");
  }

  return {
    status: finalResult.success,
    url: `${buildServer}${finalResult.image}`,
  };
};

module.exports = textMaker;
