//cookies löschen 
localStorage.clear()

//Bestellbestätigung-----
// Wenn Submit gedrückt wird soll Swal erscheinen
document.getElementById("submitOrder").onclick = function() {checkOrder()};

//Funktion zum anzeigen der Bestellbestätigung
function submitOrder() {


let Anzahl1 = document.getElementById("quantityPizza1").value 
let Anzahl2 = document.getElementById("quantityPizza2").value 
let Anzahl3 = document.getElementById("quantityPizza3").value 

    //Abspeichern der Bestellung als Cookies 
    if(Anzahl1 > 0){
        localStorage.setItem("Salami", Anzahl1)
    }

    if(Anzahl2 > 0){
        localStorage.setItem("Margherita", Anzahl2)
    }

    if(Anzahl3 > 0){
        localStorage.setItem("Thunfisch", Anzahl3)
    }


//Bestätigungs-PopUp abfeuern
  swal.fire({
    title: "Bestellung vollst&auml;ndig",
    showDenyButton: true,
    denyButtonText: 'Bestellung bearbeiten',
    confirmButtonText: `Bestellung abschicken`,
    text: "Ihre Bestellung wird nun an uns weitergegeben und von uns angenommen",
    icon: "success",
  }).then((result)=>{
    if (result.isConfirmed){
        window.location = "./bestaetigung.html";
    }
});
}


//Prüfen ob Bestellung vollständig ist 

function checkOrder() {
    let address = document.getElementById("address")
    let surname = document.getElementById("surname") 
    error = false

    //prüfen ob Adresse angegeben wurde
    if(!/^[?a-zA-Z]+\ [0-9]{3}$/.test(address.value)){
        error = true
        address.setAttribute("style", "border:4px solid red")
    }
    else{
        address.setAttribute("style", "border:2px solid")
    }

    //prüfen ob Nachname angegeben wurde
    if(!/^[?a-zA-Z]+$/.test(surname.value)){
        error = true
        surname.setAttribute("style", "border:4px solid red")
    }
    else{
        surname.setAttribute("style", "border:2px solid")
    }


    //prüfen ob Anzahl angegeben wurde
    let Anzahl1 = document.getElementById("quantityPizza1")
    let Anzahl2 = document.getElementById("quantityPizza2")
    let Anzahl3 = document.getElementById("quantityPizza3")
    
    if((Anzahl1.value === "") && (Anzahl2.value ==="") && (Anzahl3.value ==="")){
        error = true

        Anzahl1.setAttribute("style", "border:4px solid red")
        Anzahl2.setAttribute("style", "border:4px solid red")
        Anzahl3.setAttribute("style", "border:4px solid red")
    }
    else{
        Anzahl1.setAttribute("style", "border:1px solid")
        Anzahl2.setAttribute("style", "border:1px solid")
        Anzahl3.setAttribute("style", "border:1px solid")
    }
    
    //if any errors in the order occured
    if(error === true){
        swal.fire({
            title: "Bestellung fehlgeschlagen",
            text: "Bitte füllen Sie die gekennzeichneten Felder aus.",
            icon: "error",
            buttons:{
                cancel: {
                  text: "OK",
                  value: null,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
              },
          });
        }
    //wenn Bestellung in Ordnung
    else{
        submitOrder()
    }
}

//----Bestellbestätigung Ende


//Hilfefenster----

document.getElementById("helpIcon").onclick = function() {showHelp()};

function showHelp(){
    swal.fire({
        text: "Bitte geben Sie die gewünschte Menge der jeweiligen Gerichte ein und drücken sie dann den Bestellbutton \n\n Die Felder 'Name' und 'Adresse' sind Erforderlich, ohnen die Angabe dieser können wir Ihre Bestellung nicht entgegen nehmen. \n\n Es kann zu Lieferverspätungen kommen, bitte entschuldigen Sie dies. \n \n \n Bei weiteren Fragen: 03050/69420187",
        icon: "info",
    });
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        alert("pressed Enter")
        event.preventDefault();
        document.getElementById("submitOrder").click();
    }
});
//----Hilfefenster Ende

//weiterleiten zur nächsten Seite nach Swal
