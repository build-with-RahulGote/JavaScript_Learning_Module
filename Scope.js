var a =300;
let b=900;
const c=987;
if(true)
{
    var a=30;
    let b=299;
    const c=300;

    

    //  console.log("inner:b",b)
    // console.log("innner:c",c)
}
// console.log(a)
// console.log(b)
// console.log(c)


function one()
{
    const username="Rahul"
     function two()
    {
        const email="rahulg@gamil.com"
        console.log("username:",username)
    }

    // console.log(email)
    two()
}

one()