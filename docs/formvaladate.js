//form valadation
function scriptf(){
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");
    var mail = document.getElementById("mail");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var messageM = document.getElementById("messageM");
    //gives error message if any of the fields are emty 
    if(name.value == '' || name.value == null || email.value == '' || email.value == null || message.value == '' || message.value == null){
        window.alert("All fields mut be filled out")
    }
    //displays info back and resets form
    else{
        myFunction();
        window.alert("Mail sent")
        mail.style.display = "block";
        subject.innerHTML = contact.value+" "+name.value;
        messageM.innerHTML = "Email: "+email.value+"  "+message.value;
        form.reset();
    }
    return true;
}