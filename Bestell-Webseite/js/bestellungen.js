
//Bestellbestätigung-----
// Wenn Submit gedrückt wird soll Swal erscheinen
document.getElementById("submitOrder").onclick = function() {checkOrder()};

//Funktion zum anzeigen der Bestellbestätigung
function submitOrder() {
  swal({
    title: "Bestellung abgeschlossen",
    text: "Ihre Bestellung ist bei uns eingegangen und wird nun bearbeitet.",
    icon: "success",
    buttons:{
        cancel: {
          text: "Bestellung ändern",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Weiter",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      },
  });
}


//Prüfen ob Bestellung vollständig ist 

function checkOrder() {
    let address = document.getElementById("address")
    let surname = document.getElementById("surname")
    error = false

    //prüfen ob Adresse angegeben wurde
    if(address.value===""){
        error = true
        console.log("Adresse fehlt")
        address.setAttribute("style", "border:4px solid red")
    }
    else{
        address.setAttribute("style", "border:2px solid")
    }

    //prüfen ob Nachname angegeben wurde
    if(surname.value===""){
        error = true
        console.log("Name fehlt")
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
    
    //wenn Bestellung fehlerhaft
    if(error === true){
        swal({
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
    swal({
        text: "Bitte geben Sie die gewünschte Menge der jeweiligen Gerichte ein und drücken sie dann den Bestellbutton \n\n Die Felder 'Name' und 'Adresse' sind Erforderlich, ohnen die Angabe dieser können wir Ihre BEstellung nicht entgegen nehmen. \n\n Es kann zu Lieferverspätungen kommen, bitte entschuldigen Sie dies. \n \n \n Bei weiteren Fragen: 03050/69420187",
        icon: "info",
        buttons:{
            
        },
    });
}
//----Hilfefenster Ende
