import MarsRoverPhotos from "./msp.js";

export default function parameterMSP() {
  // Crear elementos de formulario
  const form = document.createElement("form"),
    roverSelected = document.createElement("select"),
    cameraSelected = document.createElement("select"),
    sol = document.createElement("input"),
    cameras = [
      "FHAZ",
      "RHAZ",
      "MAST",
      "CHEMCAM",
      "MAHLI",
      "MARDI",
      "NAVCAM",
      "PANCAM",
      "MINITES",
    ],
    rovers = ["Curiosity", "Opportunity", "Spirit"];

  // Agregar opciones a los select
  for (let i = 0; i < rovers.length; i++) {
    const option = document.createElement("option");
    option.value = rovers[i];
    option.text = rovers[i];
    roverSelected.appendChild(option);
  }

  for (let i = 0; i < cameras.length; i++) {
    const option = document.createElement("option");
    option.value = cameras[i];
    option.text = cameras[i];
    cameraSelected.appendChild(option);
  }

  // Agregar atributos al sol
  sol.type = "text";
  sol.name = "sol";

  // Agregar elementos al formulario
  form.appendChild(roverSelected);
  form.appendChild(cameraSelected);
  form.appendChild(sol);

  let roverSelectedValue = roverSelected.value,
    cameraSelectedValue = cameraSelected.value,
    solValue = sol.value;

  // Manejar el envío del formulario
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    (roverSelectedValue = roverSelected.value),
      (cameraSelectedValue = cameraSelected.value),
      (solValue = parseInt(sol.value));
    console.log("Rover selected value: ", roverSelectedValue);
    console.log("Camera selected value: ", cameraSelectedValue);
    console.log("sol value: ", solValue);
    console.log(typeof solValue === "number");
    let result = await MarsRoverPhotos(
      roverSelectedValue.toLowerCase(),
      cameraSelectedValue.toLowerCase(),
      solValue
    );
    document.getElementById("app").appendChild(result);
  });

  // Devolver el formulario
  return { form };
}
