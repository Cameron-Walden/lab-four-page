function howManyAlbums() {
    let depecheModeAlbums = prompt("How Many albums does Depeche Mode have?")
    if(depecheModeAlbums < 0 || depecheModeAlbums > 21) {
        alert("Hmm...A quick google search should help you out.");
    } else {
        alert("There ya go...Come on in.");
    }
}
howManyAlbums();