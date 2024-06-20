//  Q no 45

function make_car(manufacture: string , model: string, ...options:[string, any][]): object{
    let car = { manufacture, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "blue"],["year",2020]));

console.log(make_car("ford","fiesta",["color","red"],["sunroof","true"]));

