//for

// for (let index = 0; index <=10; index++) {
//     const element = index;
//     console.log(element)
    
// }

// for (let index = 0; index <=10; index++) {
//     const element = index;

//     if(index==5)
//     {
//         console.log("5 is best");
//     }
    
//     console.log(element)
// }

//loop under if conditon

// for (let i = 0; i <=5; i++) {
//     console.log(`outer loop ${i} value`)
//     for (let j = 0; j<=5; j++) {

//         console.log(`Inner loop ${j} value and inner loop ${i} value`)
        
//     }

//}

// loop under loop

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value :${i}`);
//     for (let j = 0; j <=10; j++)
//     {
//         // console.log(`inner loop j value:${j}and inner loop i value:${i} `);
//         console.log(`${i} * ${j}= ${i*j}`);

//     }
//   }


//Loop using Array

// const Myarray=["Tony Strak","superMan","Thor","Hulk"];
// console.log(Myarray.length)
// for (let index = 0; index < Myarray.length; index++) {
//     const element=Myarray[index]

//     console.log(element)
    
// }



for (let index = 0; index <=20; index++) {
   
    if(index==5)
    {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is:${index}`)
    
}
//In this program if 5  is detected then our loop is stop not print next values
//using break keyword we are break or stop our loop


for (let index = 0; index <=20; index++) {
   
    if(index==5)
    {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is:${index}`)
    
}

// In this prorgram firstly print if value skip print 5 print next value 
//so continue keyword skip one value and loop is going on


