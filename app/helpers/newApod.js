export async function newApod(date) {
  //https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2020-06-20
  let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=vgTL5Q0gMD5UKSlbP7ggMLEmWUNfxKtMQVGyppsZ&date=${date}`
    ),
    json = await response.json();

  let $sectionNewApod = document.createElement("section");
  console.log(date);

  return ($sectionNewApod.innerHTML = `
        <section id="apod">
            <h2>${json.title}</h2>
            <div>
                <img src="${json.url}">
                <p>${json.explanation}</p>
            </div>
            <p>${json.copyright} &copy;</p>
        </section>
    `);
}
