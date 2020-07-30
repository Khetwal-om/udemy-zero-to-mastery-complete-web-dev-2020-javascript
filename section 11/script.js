var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
]

var newFeed= [
    {
        username: "Bobby",
        timeline: "myriad slew loads of love legion"
    },
    {
        username: "Sally",
        timeline: "Oh,  I see   Fair enough"
    }
]

let userName= prompt("what's your  username")
let userPassword=prompt("what's your password")

function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
        if(database[i].username===username&& database[i].password===password){
            return true;
        }
    }
    return false;
}


function signIn(user,pass) {
    if(user===database[0].username &&
        pass===database[0].password){
        console.log(newFeed)
    }else{
        alert("invalid!")
    }
}
console.log(signIn(userName,userPassword))

