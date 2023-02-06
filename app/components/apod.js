import { obj } from "../helpers/api.js";
import { SearchForm} from "./search.js";
let apod = obj.responeDataJsonAPOD;

export function renderApod() {
  const D = document;
  let $app = D.getElementById("app"), $form = SearchForm();
  console.log(apod);
  D.querySelector("main").append($form);
  return $app.innerHTML += `
    <section class="apod">
          <h2>${apod.title}</h2>
          <div>
            <img src="${apod.url}">
            <p>${apod.explanation}</p>
            </div>
            <p>Date: ${apod.date}</p>
          <p>${apod.copyright} &copy;</p>
    </section>
  `;
};