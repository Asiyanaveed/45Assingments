// Q no 37

function make_shirt (size: string = "large", message: string = "I love typescript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed  on it.`);
}
make_shirt();  //Ddefault large and message
make_shirt("medium"); //Default message , medium size
make_shirt("small",   "Dive  into coading"); // custom message , small size

