import { obj } from "../../helpers/api.js";
import formatJson from "../../helpers/formatJson.js";

export default async function MarsRoverPhotos(rover, camera, sol) {
  let cameraInt = sol;
  let msp = await formatJson(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${obj.API_KEY}`
    ),
    $section = document.createElement("section"),
    $fragment = document.createDocumentFragment();

  if (msp.photos.length == 0) {
    $section.innerHTML = "<h2>Sin resultados</h2>";
    $fragment.appendChild($section);
  } else {
    msp.photos.forEach((img) => {
      $section.innerHTML += `
    <h2>${img.id}</h2>
    <img src="${img.img_src}">
    <p>${img.camera.full_name}</p>
    <p>${img.camera.name}</p>
    <p>Date: ${img.earth_date}
    <p>Rover: ${img.rover.name}  Status: ${img.rover.status}</p>
    `;
      $fragment.appendChild($section);
    });
  }
  console.log(msp.photos, `${rover} ${camera} ${cameraInt || "Error"}`);
  return $fragment;
}
