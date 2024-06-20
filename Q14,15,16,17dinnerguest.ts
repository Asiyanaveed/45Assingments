//Q no 14

let guests: string[]=['Bilal','Owais','faisal','fahim'];

 guests.forEach(guest => {
    console.log('Respected Brother'+ guests+ ',\n We invited you on dinner today.\nThank you\n')
});

//Q no 15

let  busyPerson = "Fahim";
console.log(`${busyPerson} can't come to dinner.`);

// Replace the  guest
let newGuest ="Abdul Samad";
guests[guests.indexOf(busyPerson)] = newGuest;

// New invitation
guests.forEach(guest => {
    console.log(`Dear ${guests}, would you like to join mr for dinner?`);
});

//Q no 16


let guests: string[]=['Bilal','Owais','faisal','fahim'];
console.log("Great news! I found a bigger table for dinner.");

//Adding more guests
guests.unshift("Abdul Samad");
guests.splice(guests.length / 2,0, "Fahim");
guests.push("Mr Naveed");

guests.forEach(guest => {
    console.log(`Dear ${guests}, would you like to join me for dinner today?`);
});


//Q no 17

console.log("Unfortunately, Ican only invite two people for dinner.");
while(guests.length > 2){
    let removedGuests = guests.pop();
         console.log(`Sorry ${removedGuests}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear, ${guests} you are still invited  for dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);