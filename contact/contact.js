"use strict";
var $ = function(id) { return document.getElementById(id); };
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;


var processEntries = function(evt) {
    if (!evt) {
        evt = window.event;
    }

    if (evt.preventDefault) {
        evt.preventDefault();
        
    }
    else {
        evt.returnValue = false;
    }
    var isValid = true;

    // get values for user entries   
    var name = ($("name").value).trim();
    var email = ($("email_address").value).trim();
    var phone = ($("phone").value).trim();
    var country = ($("country").value).trim();
    var contact = "Text";
    var message = ($("message").value).trim();
    if ($("text").checked) { contact = "Text"; }
    if ($("email").checked) { contact = "Email"; }
    if ($("both").checked) { contact = "Both"; }
    if ($("none").checked) { contact = "None"; }
    var terms = $("terms").checked;

    // check user entries for validity
    if (name == "") {
        $("name").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } 
    else {
        $("name").nextElementSibling.firstChild.nodeValue = "";
    }

    if (($("email").checked || $("both").checked) && email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else if (($("email").checked || $("both").checked) && !emailPattern.test(email)) {
        $("email_address").nextElementSibling.firstChild.nodeValue = "Must be a valid email address.";
        isValid = false;
    }
    else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";
    }

    if (($("both").checked || $("text").checked) && phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else if (($("both").checked || $("text").checked) && !phonePattern.test(phone)) {
        $("phone").nextElementSibling.firstChild.nodeValue = "Must be a valid phone number.";
        isValid = false;
    }
    else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (country == "" && ($("both").checked || $("text").checked)) {
        $("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
        isValid = false;
    } else {
        $("country").nextElementSibling.firstChild.nodeValue = "";	
    }

    if (message == "")
    {
        $("message").nextElementSibling.firstChild.nodeValue = "Please enter a message.";
        isValid = false;
    }
    else {
        $("message").nextElementSibling.firstChild.nodeValue = "";
    }
    
    if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
        isValid = false;
    } else {
        $("terms").nextElementSibling.firstChild.nodeValue = "";	
    }

    if (isValid == true) {
        $("registration_form").submit();
    }
};
var resetForm = function() {
    $("registration_form").reset();
    $("name").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").nextElementSibling.firstChild.nodeValue = " ";
    $("phone").nextElementSibling.firstChild.nodeValue = " ";
    $("country").nextElementSibling.firstChild.nodeValue = " ";
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("name").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("name").focus();
    
};