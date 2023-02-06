import { renderApod } from "../components/apod.js";
import { SearchForm } from "../components/search.js";
import { newApod } from "./newApod.js";
import { obj } from "./api.js";
import render from "./render.js";
import { newEpic } from "./newEpic.js";
import Earth from "../components/Earth.js";
import createForm from "../components/createForm.js";

const D = document,
  $app = D.getElementById("app");

export function router() {
  D.addEventListener("click", async (e) => {
    if (e.target.matches(".apod")) {
      $app.innerHTML = `<h2>Astronomy Picture of the Day</h2>`;
      renderApod();
      D.addEventListener("submit", async () => {
        let $date = localStorage.getItem("wpSearch"),
          respose = await newApod($date);
        $app.innerHTML = respose;
      });
    } else if (e.target.matches(".epic")) {
      $app.innerHTML = `<h2>EPIC</h2>`;
      $app.append(SearchForm());
      $app.append(
        await render(
          `https://api.nasa.gov/EPIC/api/natural/images?api_key=${obj.API_KEY}`
        )
      );
      D.addEventListener("submit", async () => {
        let $date = localStorage.getItem("wpSearch"),
          respose = await newEpic($date);
        $app.innerHTML = "";
        $app.append(respose);
      });
      //$app.append(epic());
    } else if (e.target.matches(".earth")) {
      const form = createForm();
      $app.innerHTML = `<h2>Earth</h2>`;
      $app.append(form);
    }
  });
  D.querySelector("main").innerHTML = "";
}
