const user={
 username:"rahul",
 id:123,

 welcomeMessage: function(){
//   console.log(`${this.username} ${this.id},WELCOME IN OUR WEBSITE `)
//   console.log(this)
 }
}

user.welcomeMessage()
user.username="mahesh"
user.id=134
user.welcomeMessage()
// console.log(this)

//********************************************************************************** */


// const addTwo=(num1,num2)=>{
// return num1+num2;
// }


// const addTwo=(num1,num2)=> num1+num2;

const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(2,8))

