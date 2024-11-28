 //singletone
 //Object.create

 //object literals
 const mysym=Symbol("key1")
  const JsUser={
    name:"Rahul",
    Age:23,
    [mysym]:"mykey1",
    Address:"kolhapur",
    Email:"goterahul20  00@gamil.com",
    isloggedIn:false,
   loginDays:["monday","Saturaday"]
  }

//   console.log(JsUser.Address)
//   console.log(JsUser["Address"])

//   console.log(JsUser[mysym])
//   console.log(typeof JsUser[mysym])

// JsUser.Email="rahulgote2000@gamil.com"
// Object.freeze(JsUser)
// JsUser.Email="rahulhote29829@gmail.com"
// console.log(JsUser)

JsUser.greeeting=function()
{
    console.log("hello Baby");
}

// console.log(JsUser.greeeting())

JsUser.greeetingTwo=function()
{
    console.log(`Hello guys am ${this.name}`)
}

console.log(JsUser.greeetingTwo())