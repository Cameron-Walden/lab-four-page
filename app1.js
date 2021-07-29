function myUserPrompt() {
    let userPrompt = prompt("Do you like Depeche Mode? Yes or No.")

    if( userPrompt == "Yes" || userPrompt == "yes") {
    alert("Nice me too. One more question for you.");
    } else if(userPrompt == "No" || userPrompt == "no") {
    alert("Why are you visiting this site then?");
    } else {
    alert("Hey. Yes or no answers only...");
    }
}
myUserPrompt();
