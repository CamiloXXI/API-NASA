import { renderApod } from "../components/apod.js";
import epic from "../components/epic.js";
import { newApod } from "./newApod.js";

const D = document,
  $app = D.getElementById("app");

export function router() {

  D.addEventListener("click", (e) => {
    if (e.target.matches(".apod")) {
      $app.innerHTML = `<h1>Astronomy Picture of the Day</h1>`;
      renderApod();
      D.addEventListener("submit", async (e) => {
        let $date = localStorage.getItem("wpSearch"),
          respose = await newApod($date);
          $app.innerHTML = respose;
      });
    } else if (e.target.matches(".epic")) {
      $app.innerHTML = `<h1>EPIC</h1>`;
      epic();
    } else if (e.target.matches(".earth")) {
      $app.innerHTML = `<h1>Earth</h1>`;
      
    }
  });
  D.querySelector("main").innerHTML = "";
};