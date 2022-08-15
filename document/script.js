console.log("from external script");
let age = 16;
if(age >= 18){
    console.log("you can campaign for omotola")
 } else {
console.log("kindly mind your business")
 }

//  let status;

//  if(age >= 18) status = "Major"
//  else status = "Minor"

//  console.log(status);

 let status = age >= 18 ? "Major" : "Minor";
 console.log(status)


 let partyman = `He is a ${age >= 18 ? "Major" : "Minor"}, He can ${
    age >= 18 ? "" : "not"
 }vote`;

 console.log(partyman);

let day = "Sunday";

switch(day){
    case "Monday":
    case "Tuesday":
        console.log("It's a week day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend, enjoy! 🎵🎙");
        break;
    default:
        console.log("You have problem");
} 


for (let i = 0; 1 <= 10; i++) {
    console.log(i);
}
//  console.log(i)

//  console.log(myVar)

//  let myVar = "Hello"
let count = 1;
while (count <= 10){
    console.log(count)
    count++;
}
count =1
do{
    console.log(count);
    count++
}while(count <= 10)

