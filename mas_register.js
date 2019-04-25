"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  
   Date:    
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", function () {
      calcCart();

      document.getElementById("fnBox").onblur = calcCart;

      document.getElementById("lnBox").onblur = calcCart;

      document.getElementById("groupBox").onblur = calcCart;

      document.getElementById("mailBox").onblur = calcCart;

      document.getElementById("phoneBox").onblur = calcCart;

      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;

      document.getElementById("mediaCB").onclick = calcCart;
});
//displaying "select a session package" on the browser
function sessionTest() {
      var confSession = document.getElementById("sessionBox");
      if (confSession = -1) {
            confSession.setCustomValidity("Select a Session Package");
      } else {
            confSession.setCustomValidity("")
      }
}


function calcCart() {
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.group.value;
      sessionStorage.confMail = document.forms.regForm.elements.email.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneNumber.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetGuest.value;
      //The cost of the banquet is $55 per guest
      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      var selectedIndex = document.getElementById("sessionBox").selectedIndex;

      if (sessionBox.selectedIndex !== -1) {

            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;

            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      if (document.getElementById("mediaCB").onclick) {
            sessionStorage.confPack = "Yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "No";
            sessionStorage.confPackCost = 0;
      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confPackCost) + parseFloat(sessionStorage.confSessionCost)

      writeSessionValues();
}