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


