//Q   no  30

let user_name : string[]=["admin", "user1","user2","user3","user4"];

user_name.forEach(user_name =>{
    if (user_name === "admin"){
        console.log("hello admin would you   like to see a status report");
    }else {
        console.log(`helllo${user_name},thank you for logging again.`);
    }
});