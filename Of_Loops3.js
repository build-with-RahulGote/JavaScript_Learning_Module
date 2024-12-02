
const Player=[
    {
        name:"Rohit Sharma",team:"Mumbai Indians",fild:"batsman"
    },
    {
         name:"Virat Kohali",team:"RCB",fild:"batsman"
    },
    {
        name:"J.Bhumarah",team:"Mumbai Indians",fild:"bolwer"

    },
    {
        name:"Rishb Pant",team:"DD",fild:"wicket keeper"

    },
    {
        name:"Dhoni",team:"csk",fild:"wicket keeper"

    },
    {
        name:"Jadeja",team:"csk",fild:"bolwer"

    },
    {
        name:"Suryakumakr",team:"Mumbai Indians",fild:"batsman"

    },
]

// let iplplayer=Player.filter((item)=>
//      { return item.team === "Mumbai Indians" && item.fild ==="batsman"

//      })


     
//  iplplayer=Player.filter((item)=>item.team==="csk");

// console.log(iplplayer)



const number=[1,2,3,4,5,6,7,8,9,10]
const numbers1=number.map((num)=>num+10)
// console.log(numbers1);

// iplplayer=Player.filter((item)=>item.fild==="batsman");
// let iplplayer1=Player.map((item)=>item.fild==="batsman")
// console.log(iplplayer)
// console.log(iplplayer1)

// Chaining 
// const mynumbers=number
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                  .filter((num)=>num>30)

// console.log(mynumbers)

//Reduce

const numbers=[1,2,3,5];//0+1=1+2=3+3=6+5=11
// const mynumber=numbers.reduce((acc,curvalue)=>
//     {
//         console.log(`Accumaltor:${acc} and curren value:${curvalue}`);
//         return acc+curvalue
//     },0
// )

// const mynumber=numbers.reduce((acc,curvalue)=>acc+curvalue,0)
// console.log(mynumber)

const shopingcart=[
    {
        product_name:"hp_laptop",
        price:56000
    },

    {
        product_name:"Assus_laptop",
        price:70000
    },
    {
        product_name:"lenovo_laptop",
        price:60000
    }
]

const pricecart=shopingcart.reduce((acc,item)=>acc+item.price,0)

console.log(`Total Price:${pricecart.toLocaleString('en-IN')}`)