import { obj } from "../helpers/api.js";
import { SearchForm} from "./search.js";
let apod = obj.responeDataJsonAPOD;

export function renderApod() {
  const D = document;
  let $app = D.getElementById("app"), $form = SearchForm();
  
  D.querySelector("main").append($form);
  return $app.innerHTML += `
    <section id="apod">
          <h2>${apod.title}</h2>
          <div>
            <img src="${apod.url}">
            <p>${apod.explanation}</p>
          </div>
          <p>${apod.copyright} &copy;</p>
    </section>
  `;
};