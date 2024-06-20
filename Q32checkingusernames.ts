//Q  no   32

let currentUser : string[] = ["user1","admin","user3","user4","user5"];

let newUser : string[] = ["user2","user6","user7","admin","user9",];

newUser.forEach(newUser =>{if
    (currentUser.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new user.`);
    }else{
        console.log(`${newUser} is avalaible.`);
    }

});
