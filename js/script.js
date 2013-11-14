$("#portfolio_form").validate({
errorPlacement: function(error, element) {
    if (element.attr("name") == "credit_card_type") {
      error.insertAfter("#card_selector");
    } else {
      error.insertAfter(element);
    }
  },

  rules: {
    
    portfolio_title: 	"required",
    portfolio_address: 	"required",
    name: 				"required",
    email: {
      required: true,
      email: true
    },
    password:  			"required",
    card_number:  		"required",
    security_code:   	"required",
    month: 				"required", 
    year:     			"required"
  },

  messages: {
  	portfolio_title: "Please name your portfolio",
    portfolio_address: "Please give your portfolio a URL",
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    password: "Please enter a password",
    card_number: "Please enter a credit card number",
    security_code: "Please enter your three digit security code",
    month: "Please enter the expiration month",
    year: "Please enter the expiration year",
    credit_card_type: "Please select a card type"


  }
});