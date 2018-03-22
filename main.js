// Write your JavaScript here
function calculateChange() {
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var change = amountReceived - amountDue;
  
    if (change % 1 === 0) {
      dollars = change;
  
    } else {
  
      var amountDollars = change % 1;
      dollars = change - amountDollars;
      change = amountDollars;
  
    }
  
    if (change % 1 === 0) {
      quarters = 0;
    
    } else {
  
      var amountQuarters = change % 0.25;
      var quartersCalc = change - amountQuarters;
      var quarters = quartersCalc / 0.25;
      change = amountQuarters;
    }
  
    if (change % 1 === 0) {
      dimes = 0;
    
    } else {
  
      var amountDimes = change % 0.1;
      var dimesCalc = change - amountDimes;
      var dimes = dimesCalc / 0.1;
      change = amountDimes;
  
    }
    
    if (change % 1 === 0) {
      nickels = 0;
    
    } else {
    
      var amountNickels = change % 0.05;
      var nickelsCalc = change - amountNickels;
      var nickels = nickelsCalc / 0.05;
      change = amountNickels;
    }
    
    if (change % 1 === 0) {
      pennies = 0;
    
    } else {
    
    var amountPennies = change;
    var pennies = (amountPennies / 0.01).toFixed(0);
    
    
    }
    
    document.getElementById("dollars-output").innerHTML = dollars;
    document.getElementById("quarters-output").innerHTML = quarters;
    document.getElementById("dimes-output").innerHTML = dimes;
    document.getElementById("nickels-output").innerHTML = nickels;
    document.getElementById("pennies-output").innerHTML = pennies;
  
  }
  
  document.getElementById('calculate-change').onclick = function() {
    calculateChange();
  }
  