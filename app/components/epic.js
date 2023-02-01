import { obj } from "../helpers/api.js";
import { SearchForm } from "./search.js";

export default function epic() {
  const EPIC = obj.responeDataJsonEPIC, $app = document.getElementById("app");  
  let renderEpic = EPIC.forEach((element) => {
    let date = element.date.substring(0, 10).replace(/-/g, "/");
    $app.innerHTML += `
        <div>
            <h2>Identifier: ${element.identifier}</h2>
            <img src="https://epic.gsfc.nasa.gov/archive/natural/${date}/png/${element.image}.png" width="250px" height="250px">
        </div>
        `;
  });

  return renderEpic;
}
