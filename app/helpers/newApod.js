import { url } from "../components/search.js";

export async function newApod(date){
    //https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2020-06-20
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=vgTL5Q0gMD5UKSlbP7ggMLEmWUNfxKtMQVGyppsZ&date=${date}`), json = await response.json();
    
    let $sectionNewApod = document.createElement("section");
    console.log(json);

    return $sectionNewApod.innerHTML = `
        <h2>${json.title}</h2>
        <p>${json.explanation}</p>
        <img src="${json.url}">
        <p>${json.copyright} &copy;</p>
    `;
}