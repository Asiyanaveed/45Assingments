// Q no  42

let magician : string[] =
["Alice", "David", "Chris"];

function make_great(magician: string[]){
    for (let i = 0; i<magician.length; i++){
        magician[i] = magician[i] + "the great";
    }
}

make_great(magician); //modifies the original array

show_magicians(magician); //shows modified names