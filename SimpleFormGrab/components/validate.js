validateInputFields() {
    var firstNameInput, lastNameInput, contactNumberInput, addressInput, validateStatusMsg;
    
    // firstName Input Validation
    firstNameInput = document.getElementById("firstName").value;
    var letters = /^[A-Za-z]+$/;
    if(!/^[a-zA-Z]*$/g.test(firstNameInput) || firstNameInput === ""){
        validateStatusMsg = "Enter a valid input";
    } else {
        validateStatusMsg = "Correct";
    }
    document.getElementById("errorMsgFirstName").innerHTML = validateStatusMsg;

    // lastName Input Validation
    lastNameInput = document.getElementById("lastName").value;
    var letters = /^[A-Za-z]+$/;
    if(!/^[a-zA-Z]*$/g.test(lastNameInput) || lastNameInput === ""){
        validateStatusMsg = "Enter a valid input";
    } else {
        validateStatusMsg = "Correct";
    }
    document.getElementById("errorMsgLastName").innerHTML = validateStatusMsg;

    // contactNumber Input Validation
    contactNumberInput = document.getElementById("contactNumber").value;
    if (isNaN(contactNumberInput) || contactNumberInput === "") {
        validateStatusMsg = "Enter a valid input";
    } else {
        validateStatusMsg = "Correct";
    }
    document.getElementById("errorMsgContactNumber").innerHTML = validateStatusMsg;

    // address Input Validation
    addressInput = document.getElementById("address").value;
    if (addressInput === "") {
        validateStatusMsg = "Enter a valid input";
    } else {
        validateStatusMsg = "Correct";
    }
    document.getElementById("errorMsgAddress").innerHTML = validateStatusMsg;
}