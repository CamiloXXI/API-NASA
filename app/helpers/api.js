let date = new Date(),
dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
console.log(dateNow);

const API_KEY = "vgTL5Q0gMD5UKSlbP7ggMLEmWUNfxKtMQVGyppsZ", 
    URLApod = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    //https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2020-06-20 --> Ejemplo del paso de parámetro date
    URLEPIC = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`,
    URLEarth = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-29?api_key=${API_KEY}`;

    /**
     * https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png 
     * URL para poder pasar los parámetros solicitados en la API 
     * URL de la doc = https://epic.gsfc.nasa.gov/about/api
     */

let responseAPOD = await fetch(URLApod), responeDataJsonAPOD = await responseAPOD.json(), 
responseEPIC = await fetch(URLEPIC), responeDataJsonEPIC = await responseEPIC.json(),
responseEarth = await fetch(URLEarth), responeDataJsonEarth = await responseEarth.json();


export const obj = {
    responeDataJsonAPOD,
    responeDataJsonEPIC,
    responeDataJsonEarth,
    API_KEY
}

