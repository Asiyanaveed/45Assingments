// Q no  38

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("lahore");
describe_city("tokyo",   "japan");