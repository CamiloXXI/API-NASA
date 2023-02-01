import { renderApod } from "../components/apod.js";
import { SearchForm } from "../components/search.js";
import { newApod } from "./newApod.js";
import render from "./render.js";

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
      $app.append(await render(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${obj.API_KEY}`));
      //$app.append(epic());
    } else if (e.target.matches(".earth")) {
      $app.innerHTML = `<h2>Earth</h2>`;
    }
  });
  D.querySelector("main").innerHTML = "";
}
