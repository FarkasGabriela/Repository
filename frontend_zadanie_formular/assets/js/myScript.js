
_    // funkcia počíta tringelt z celkovej sumy prepočítaný na zadaný počet osôb

    function Calculation(){

    var amountBill = document.getElementById("amountBill").value;
    var serviceTip = document.getElementById("serviceTip").value;
    var peopleCount = document.getElementById("peopleCount").value;
    
    if (amountBill === "" || serviceTip == 0) {
        alert("Empty value fields.");
        return;
      }
    
    var totalBill = (amountBill * serviceTip) / peopleCount;
    
    totalBill = Math.round(totalBill * 100) / 100;
    totalBill = totalBill.toFixed(2);
    
    window.alert("Total amount is:  " + totalBill + " Eur per person.");
    }
    


    // funkcia počíta tringelt+sumu prepočítanú na zadaný počet osôb
    /*
    function Calculation(){

    var amountBill = document.getElementById("amountBill").value;
    var serviceTip = document.getElementById("serviceTip").value;
    var peopleCount = document.getElementById("peopleCount").value;

    if (amountBill === "" || serviceTip == 0) {
         alert("Empty value fields");
        return;
    }

    var totalBill = (amountBill * serviceTip) / peopleCount;

    var billPerPerson = (amountBill / peopleCount);

    window.alert("Total amount is:  " + (totalBill + billPerPerson) + " Eur per person");
    }
    */