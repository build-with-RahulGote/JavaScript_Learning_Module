function addTwoNumbers( number1 , number2)
{
    console.log(number1+number2);
    
}

addTwoNumbers(3,4)

function addTwoNumbers( number1 , number2)
{
   let result=number1+number2;
   return result
    
}

// const result=addTwoNumbers(4,9)
// console.log("result:",result)


function islogedIn(username){
  return `${username} just logged in`
}

console.log(islogedIn("Rahul"))
// const result=islogedIn("Rahul")
// console.log(result);


function isLoggedIn(username){
    if(!username)
    {
        console.log("Please Enter user name:")
    }
    else
    {
        return `${username} just Logged In`
    }
}
console.log(isLoggedIn())
console.log(isLoggedIn(" "))
console.log(isLoggedIn("rahul"))

function calculateCartPrice(... num1)
{
    return num1
}

console.log(calculateCartPrice(100,200,3000,4000))


const user={
    name:"rahul",
    id:"123"
}

function userObjetc(anyObject)
{
    console.log(`use name:${anyObject.name} id:${anyObject.id}`)
}

userObjetc(user)