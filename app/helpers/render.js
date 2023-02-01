import dateEpic from "./dateEpic.js";
import formatJson from "./formatJson.js";

export default async function render(url) {
  let response = await formatJson(url),
    $section = document.createElement("section"), fragment = document.createDocumentFragment();
    console.log(response)
    if(response.lenght != 0){
      response.forEach(element => {
        $section.innerHTML += `
        <h2>${element.identifier}</h2>
        <img src=https://epic.gsfc.nasa.gov/archive/natural/${dateEpic(element.date)}/png/${element.image}.png alt="err" width="200px" height="200px">
        `;
        fragment.appendChild($section);
      });          
    }
    else{
      $section.innerHTML = "Cargando";
      fragment.appendChild($section);
    }
  
  return fragment;
}