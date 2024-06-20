// Q no  44


function make_sandwich(...items: string[]) {
    console.log(`making sandwich with : ${items.join(',')}.`);
}
make_sandwich("ham", "cheese",);
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacado", "sprouts", "mustard", "mayo");
