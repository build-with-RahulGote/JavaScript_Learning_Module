//for each loop

const coding=["python","java","cpp","javascript"];
// coding.forEach(function(values) {
//     console.log(values)
    
// });

//Arrow fuction 
// coding.forEach(values => {
//     console.log(values)
    
// });

// function printme(values)
// {
//     console.log(values)
// }



// coding.forEach(printme)


// coding.forEach((values,index,arr)=>{
//     console.log(values,index,arr);
// })


// array under object

const mycodding=[
    {
        langugaeName:"c++",
        file:".cpp"
    },

    {
        langugaeName:"java",
        file:".java"
    },

    {
        langugaeName:"c",
        file:".c"
    }
]

// mycodding.forEach((item)=>{
//     console.log(item.file);
//     })
    
// mycodding.forEach((item)=>{
// console.log(`file name :${item.langugaeName}  exstion:${item.file}`);
// })

const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})

// console.log(values);

// using for each loop we can't return any value



//Filters

const mynumbers=[1,2,3,4,5,6,7,8,9,10];


const newnum=[];
mynumbers.forEach((num)=>{
    if(num >=5)
    {
        newnum.push(num)
    }
})

console.log(newnum)


// const number=mynumbers.filter((num)=>num>5)

//we use {} so write return keyword is strict

// const number=mynumbers.filter((num)=>{
//     return num > 5
// })

// console.log(number)



