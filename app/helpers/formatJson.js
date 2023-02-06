export default async function formatJson(url) {
  try {
    let response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
