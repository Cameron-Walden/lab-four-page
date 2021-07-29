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

function howManyAlbums() {
    let depecheModeAlbums = prompt("How Many albums does Depeche Mode have?")
    if(depecheModeAlbums < 0 || depecheModeAlbums > 21) {
        alert("Hmm...A quick google search should help you out.");
    } else {
        alert("There ya go...Come on in.");
    }
}
howManyAlbums();

function myThirdAlert() {
    let thirdAlert = alert("We're done with the questions now. Have a look around!")
}
myThirdAlert();
