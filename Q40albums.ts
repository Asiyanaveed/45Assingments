//   Q no  40

function make_album(artist: string, title: string, tracks?: number){
    let album = {artist, title, tracks };
    if (tracks){
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The first album"));
console.log(make_album("Artist two", "The second album"));
console.log(make_album("Artist three", "The third album", 12));
