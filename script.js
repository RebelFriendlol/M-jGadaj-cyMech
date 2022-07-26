let odpowiedzi = ["Tak.","Nie.","bhleeee","Tooo demon jest psychopataaaa!"];

let rekomendacje = ['"Ta rozmowa zmieniła moje życie" - Daniel S', 
'"Leśnik nauczył mnie ja porządnie napierdalać z karabinku" - Tytus Bomba',
'"U niego nauczyłem się tak wyciskać na klate" - Pudzian',
'"Wędkowałem z nim kiedyś" - Bear Grylls' 
];

var liczba = Math.floor(Math.random() * (3 + 1)-1+1);

function odpowiedz(){      
    console.log(liczba);
    document.getElementById("odpowiedz").innerHTML = odpowiedzi[liczba];      
}
function rekomendacja(){
    document.getElementById("rekomendacja").innerHTML = rekomendacje[liczba];
}

function DarkMode(){ 
        let element = document.body;
        let napis = document.getElementById("title");
        element.classList.toggle("dark-mode");
        napis.classList.toggle("dark-mode-title");   
        //Od tego momentu nie mam pojęcia jak to działa   
        console.log(napis.style.backgroundColor); // empty string
        var bcolor = window.getComputedStyle(napis).backgroundColor;
        console.log(bcolor); // rgb(35, 35, 35)
        if (bcolor == "rgb(35, 35, 35)"){
        napis.style.backgroundColor = "#fafafa";
        } else {
        napis.style.backgroundColor = "#232323";
        } 
}
