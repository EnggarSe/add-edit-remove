let person = {
    name : "Enggar Septrinas",
    address : "Jalan Sumua",
    age : 28
};

//local storage

localStorage.setItem("person", JSON.stringify(person)); // set local storage
localStorage.setItem("isLogin", true);

let getPersonFromLocalStorage = localStorage.getItem("person"); // get local storage
let nameLocalStorage = localStorage.getItem("name");

console.log(JSON.parse(getPersonFromLocalStorage), "Local Storage");
console.log(nameLocalStorage, "name");

//sesion storage
// let name = prompt("write your name")

if(name != null){
    sessionStorage.setItem("name", name);
    localStorage.setItem("name", name);
}

// interaction on browser
let isSignUp = confirm("Do you want to sign up ?");

if(isSignUp === true){
    let name = prompt("Write Your Name");
    let age = prompt("Insert your age");
    alert(name);
    console.log(typeof name, "name");
    console.log(typeof age, "age");
    console.log(typeof Number(age), "age");
}
console.log(isSignUp, "signup status");




