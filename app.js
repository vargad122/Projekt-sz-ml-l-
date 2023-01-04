//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//Ciklussal végig lépkedek az eltárolt btn classu gombokon
btns.forEach((btn) => {

    //Az összes gomb küzól arra katitintol rá amilyik ciklus futáskor küvetkezik
    btn.addEventListener("click",(e) => {

        //MEgnézzük,hogy az aktuálisan megkattintott gombon milxen class/clasok vannak
        const style = e.currentTarget.classList;

        //Megnézzük,hogy a megkattintott gomb tartalmazza-e a "decrease" classt
        if(style.contains("decrease")){

            //Ha igen akkor az alapértékünket csökkentjük
            count--;
        }
        //Megmézzük,hogy a megkattintott gomb tartalmazza-e a"increase" classt
        else if(style.contains("increase")){

            //Ha igen akkor az alapértékünket növeljük
            count++;
        }
        //Ha ezek közül egyik sem, tehát kizárásos alapon maradt a "reset"
        else{

            //Akkor az alapértéket visszaállítjuk 0-ra
            count = 0;
        }


        //Adjuk hozzá a színeket annak függvényében,hogy a szám pozitiv vagy negativ

        if(count > 0){

            value.style.color = "green";
        }
        else if(count < 0){

            value.style.color = "red";
        }
        else{

            value.style.color = "black"
        }
        //Beletöltjük a spanbe az alapértékünk aktuális értékét
        value.textContent = count;

    })

})