;(function(){

  var cards = {
    "visa": {
      "pattern": /^4/, 
      "cvv": "back"
    },
    "mastercard": {
      "pattern": /^5[1-5]/,
      "cvv": "back"
    },
    "amex": {
      "pattern": /^3[47]/,
      "cvv": "front"
    },
    "discover": {
      "pattern": /^6(?:011|5[0-9]{2})[0-9]{12}/,
      "cvv": "back"
    }
  };

  function getCreditCardType(accountNumber)
  {
    var matchedCard = false;

    $.each(cards, function(cardName, cardAttrs) {
      if(cardAttrs.pattern.test(accountNumber)){
        matchedCard = cardName;
        return false; // kicks you out of $.each loop
      }
    });

    return matchedCard;

  }


  function updateCardOnPage(type) {
    if(type){
      $("#"+type).click(); 

      updateCVVOnPage(type);

    } else {
      $("#card_selector input[type=radio]").prop("checked", false);
      $('#security_amex').show().removeClass("text_indent");
      $('#security_default').show().removeClass("text_indent");

    }
  }



    function updateCVVOnPage(type) {


     if (cards[type].cvv === "front") {
      $('#security_default').hide();
      $('#security_amex').addClass("text_indent");
      console.log("hi");
    }
      else if (cards[type].cvv === "back"){
        $('#security_amex').hide();
        $('#security_default').addClass("text_indent");
        console.log("yo");
      }
  }  



  function handleEvent(event)
  {
    var value   = event.target.value,    
        type    = getCreditCardType(value);

    updateCardOnPage(type);
   

  }

  // or window.onload
  
    var textbox = document.getElementById("card_number");
    textbox.addEventListener("keyup", handleEvent, false);
    textbox.addEventListener("blur", handleEvent, false);

})();