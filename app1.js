function myUserPrompt() {
    let userPrompt = prompt("Do you like Depeche Mode? Yes or No.")

    if( userPrompt == "Yes" || userPrompt == "yes") {
    alert("Nice me too. Another Question for you...");
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
howManyAlbums()


function picsOnPage() {
    let numPics = prompt("Oh actually wait. Sorry to do this to you- last question I swear. How many pictures of the exact same cheerful Depeche Mode would you like to see?")
    for(let i = 0; i < numPics; i++) {
        document.write('<img src ="http://www.tiptopwebsite.com/photos3/depechemodefile/fluffy.jpg">')
        alert("Alright! That's all she wrote. Come on in. Sorry for all the prompts!")
    }
}
picsOnPage();