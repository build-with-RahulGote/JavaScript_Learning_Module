const allbuttons=document.querySelectorAll('.buttons');
const body=document.querySelector('body');
// console.log(allbuttons)

allbuttons.forEach(function(buttons){
// console.log(buttons);
buttons.addEventListener('click',function(event){
    // console.log(event);
    // console.log(event.target);
    if(event.target.id==="red"||event.target.id==="pink"||event.target.id==="blue"||event.target.id==="orange"||event.target.id==="purple")
    {
        body.style.backgroundColor=event.target.id;
    }
    
})
});