function myUserName() {
    let userName = prompt("What's your name?")
    if(userName == "Cameron") {
        alert("Hello " + userName + "! How are you today? Come on in." );
    } else {
        alert("Hello " + userName + ". Welcome to my site.");
    }
}
myUserName();
