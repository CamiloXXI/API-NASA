import { obj } from "../helpers/api.js";
import formatJson from "../helpers/formatJson.js";
import createForm from "./createForm.js";

export default function Earth(lon, lat, date, dim) {
  const $app = document.getElementById("app");

  formatJson(
    `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=${dim}&api_key=${obj.API_KEY}`
  ).then((json) => {
      $app.innerHTML += `
        <div>
            <h2>${json.id}</h2>
            <img src=${json.url} alt="error" class="earthImg">
            <ul>
                <li>Service version ${json.service_version}</li>
                <li>Planet ${json.resource.planet}</li>
            </ul>
        </div>
    `;      
      console.log(json)
  });
}
