function myUserPrompt() {
    let userPrompt = prompt("Do you like Depeche Mode? Yes or No.")

    if( userPrompt == "Yes".toLowerCase()) {
    alert("Nice me too. One more question for you.");
    } else if(userPrompt == "No".toLowerCase()) {
    alert("Why are you visiting this site then?");
    } else {
    alert("Hey. Yes or no answers only...");
    }
}
myUserPrompt();
