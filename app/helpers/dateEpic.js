export default function dateEpic(date){
    let dateCorrectFotmat = date.substring(0, 10).replace(/-/g, "/");
    console.log(dateCorrectFotmat);
    return dateCorrectFotmat;
}