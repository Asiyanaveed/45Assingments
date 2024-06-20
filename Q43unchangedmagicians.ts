let magician: string[] =["Alice", "David", "Chris"];

function make_great(magician: string[]): string[] {
    let greatMagician:string[] = [];
    magician.forEach(magician =>{
        greatMagician.push(`${magician} the great`);
    });
    return greatMagician;
}

let greatMagician = 
make_great(magician.slice());//create a new modified array
console.log("original magicians:");
show_magicians(magician);//show original names
console.log("great magicians:");
show_magicians(greatMagician); //show modified names
