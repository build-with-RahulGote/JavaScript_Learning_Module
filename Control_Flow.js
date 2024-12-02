//Control flow

//if

const isLoggedIN =true
const temparatue=40

// if(isLoggedIN)
// {
//     console.log(`user logged in`)
// }


// if(temparatue<50)
// {
//     console.log("temparature is less than 50");
// }
// else
// {
//     console.log("temparuture is greater than 50")
// }



//implicit scope 

// const balance =1000;

// if(balance>500) console.log("test1"),console.log("test22");

// if(balance<500)
// {
//     console.log("less than 500");
// }
// else if(balance<750)
// {
//     console.log("less than 750");
// }
// else if(balance<900)
// {
//     console.log("less than 900");
// }
// else(balance>1200)
// {
//     console.log("less than 1200");
// }

// const isLoggedIN=true;
// const debit_card=true;
// const isLoggedINFromNumber=false;
// const isLoggedINFromEmail=true;

//&& operator both conditon will be true then proceed your code 
// if(isLoggedIN && debit_card)
// {
//     console.log("You have buy");
// }


// || operator any one condition will be true then proceed your code 
// if(isLoggedINFromNumber || isLoggedINFromEmail)
//     {
//         console.log("You have buy");
//     }


//Switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



//Falsy values 
//false,0,-0,BigInt,0n,"",null,undefind,NaN

//truthy values
//"0",'false'," Space",[],{},functio (){}

// const array =[];
// if(array.length==0)
// {
//     console.log("executed")
// }

// const emptyobject={}
// if(Object.keys(emptyobject).length==0)
// {
//     console.log("Executed")
// }



//Null coalescing operator (??):null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10;
// val1=undefined ?? 20;
// val1=undefined ?? null    //print null value
//val1=null ?? 10 ?? 20; // print first value after null value
// console.log(val1)



// Terniary Operator 

//condition ? true:false

const price=1000;

price<=900 ? console.log("price is less"):console.log("price is high");


