//Immediately Invoked Function Expression
//  function build()
//  {
//     console.log("DB Connected")
//  }

//  build()

//Two iife in one file
(function Db()
{
   console.log("DB conncted")//name iife
})();

( (name)=>{
   console.log(`DB Connected two ${name} `);
})('Rahul' )//unmaed iife