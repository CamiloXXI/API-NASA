import Earth from "./Earth.js";
import searchEarth from "./searchEarth.js";

export default function createForm() {
  const form = document.createElement("form");

  const lon = document.createElement("input");
  lon.type = "text";
  lon.name = "lon";
  lon.placeholder = "Longitude";
  form.appendChild(lon);

  const lat = document.createElement("input");
  lat.type = "text";
  lat.name = "lat";
  lat.placeholder = "Latitude";
  form.appendChild(lat);

  const date = document.createElement("input");
  date.type = "text";
  date.name = "date";
  date.placeholder = "Date";
  form.appendChild(date);

  const dim = document.createElement("input");
  dim.type = "text";
  dim.name = "dim";
  dim.placeholder = "Dimension";
  form.appendChild(dim);

  const send = document.createElement("button");
  send.type = "submit";
  send.innerHTML = "Send";
  form.appendChild(send);

    form.addEventListener("submit", (e) => {
        let { lonValue, latValue, dateValue, dimValue } = searchEarth(e);
        Earth(lonValue, latValue, dateValue, dimValue);        
    });

  return form;
}
