//types
let info : string = "hello";
let age : number = 23;
let correct : boolean = true;

let stringArray : string[] = [];
stringArray.push("hi");

let mixed : (string | number | boolean)[] = [];
mixed.push("I am ");
mixed.push(20);
mixed.push(true);
console.log(mixed);

let uid : string | number;
uid = "typescript";
uid = 30;

let team : object;
team = {
    name : "galatasaray",
    date : 1905
}
team = [];

let team2 : {
    name : string,
    age : number,
    isChampion : boolean
}

team2 = {
    name : "asd",
    age : 12,
    isChampion : false
}