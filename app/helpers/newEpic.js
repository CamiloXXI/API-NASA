import { obj } from "./api.js";
import dateEpic from "./dateEpic.js";
import formatJson from "./formatJson.js";

export async function newEpic(date) {
  let responseJson = await formatJson(
    `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${obj.API_KEY}`
  );

  let $sectionEpic = document.createElement("section"),
    fragment = document.createDocumentFragment();
  console.log(responseJson);
  responseJson.forEach((element) => {
    $sectionEpic.innerHTML += `
        <h2>${element.identifier}</h2>
        <img src=https://epic.gsfc.nasa.gov/archive/natural/${dateEpic(element.date)}/png/${element.image}.png alt="err" width="200px" height="200px">
        `;
    fragment.appendChild($sectionEpic);
  });

  return fragment;
}
