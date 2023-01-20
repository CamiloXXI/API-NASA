export let url = localStorage.getItem("wpSearch");

export function SearchForm(){
    const D = document, $FORM = D.createElement("form"),
    $INPUT = D.createElement("input");

    $FORM.classList.add("search-form");
    $INPUT.name = "search";
    $INPUT.type = "search";
    $INPUT.placeholder = "YYYY-MM-DD";
    $INPUT.autocomplete = "off";

    $FORM.appendChild($INPUT);

    if(location.hash.includes("#/search")) $INPUT.value = localStorage.getItem("wpSearch");

    D.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) return false;

        if(!e.target.value) localStorage.removeItem("wpSearch");
    });
    
    D.addEventListener("submit", e => {
        if(!e.target.matches(".search-form")) return false;

        e.preventDefault();
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `date=${e.target.search.value}`;
    });

    
    return $FORM;
}
