function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

a = new Date();
b = addZero(a.getHours());
c = addZero(a.getMinutes());
d = addZero(a.getDay());
e = addZero(a.getMonth());
f = a.getFullYear();

timestamp = d + '.' + e + '.' + f + ' ' + b +':'+ c;

console.log(timestamp)

document.getElementById("bestaetigung_titel").innerText = document.getElementById("bestaetigung_titel").innerText + ' ' + timestamp


//Swal mit Laufzeit 

swal.fire({
    title: 'Bestellung wird vom Restaurant geprüft',
    html: 'Bitte haben Sie etwas geduld.',
    timer: 5000,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
      },
}).then((result) => {
    swal.fire({
        title: "Bestellung best&auml;tigt",
        timer: 5000,
        showDenyButton: false,
        showConfirmButton: false,
        text: "Ihr Essen wird nun zubereitet. Danke für ihre Bestellung.",
        icon: "success",
      });
      showCountdown()
  })

//----------------

//Hilfefenster----

document.getElementById("helpIcon").onclick = function() {showHelp()};

function showHelp(){
    swal.fire({
        text: "Bitte geben Sie die gewünschte Menge der jeweiligen Gerichte ein und drücken sie dann den Bestellbutton \n\n Die Felder 'Name' und 'Adresse' sind Erforderlich, ohnen die Angabe dieser können wir Ihre Bestellung nicht entgegen nehmen. \n\n Es kann zu Lieferverspätungen kommen, bitte entschuldigen Sie dies. \n \n \n Bei weiteren Fragen: 03050/69420187",
        icon: "info",
    });
}

//----Hilfefenster Ende


//Anzeigen des Bestellzeitpunktes


//Bestellzusammenfassung in Form einer Tabelle anzeigen
document.getElementById("table_container").innerHTML = '<table id="order_list"> <tr><th>Produkt</th><th>Menge</th></tr>'

let keys = Object.keys(localStorage);

keys.forEach(function(key){
    //document.getElementById("table_container").innerHTML = document.getElementById("table_container").innerHTML + "<tr><td>" + key + "</td><td>" +localStorage.getItem(key) + "</td></tr>"

    document.getElementById("order_list").innerHTML = document.getElementById("order_list").innerHTML + "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>"
});


function showCountdown(){
        //Anzeigen des Countdowns 


    //Funktion zum anzeigen der Progressbar
    var i = 0;
    function move_ProgressBar() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("Bar");
        var width = 1;
        var id = setInterval(frame, 12000);
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            }
        }
    }
    }


    // Uhrzeit zu der die Bestellung fertig ist
    var countDownDate = new Date().getTime() +1200000;

    // Updaten des Counters jede Minute
    var x = setInterval(function() {

    // Momentanes Datum holen
    var now = new Date().getTime();
        
    // Delta zwischen dem Zieldatum und dem jetzigen Datum holen
    var distance = countDownDate - now;
        
    // Minuten-Delta berechnen
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) ;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Ergebnis ausge ben
    document.getElementById("timer").innerText =  "Abholbereit in: " + minutes + " : " + addZero(seconds)
        
    // Wenn Counter angelaufen Text anzeigen 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerText = "Bestellung ist abholbereit!";
        document.getElementById("timer").blink()
    }
    }, 1000);

    move_ProgressBar()

}




