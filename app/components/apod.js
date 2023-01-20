import { obj } from "../helpers/api.js";
import { SearchForm, url } from "./search.js";
let apod = obj.responeDataJsonAPOD;

export function renderApod() {
  const D = document;
  let $app = D.getElementById("app"), $form = SearchForm();
  console.log(url);
  
  D.querySelector("main").append($form);
  return $app.innerHTML += `
    <section>
        <div>
          <h2>${apod.title}</h2>
          <p>${apod.explanation}</p>
          <img src="${apod.url}">
          <p>${apod.copyright} &copy;</p>
        </div>
    </section>
  `;
};