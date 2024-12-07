const formtag=document.querySelector('form');

formtag.addEventListener('submit',function(Event){
    Event.preventDefault();

  const height =parseInt(document.querySelector('#height').value);
  console.log(height)
  const weight =parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results')

  if(height===  ""|| isNaN(height)||height<0)
  {
    result.innerHTML=`Please give a valid height ${height}`;
  }
   else if(weight===""||isNaN(weight)||height<0)
    {
      result.innerHTML=`Please give a valid weight ${weight}`;
    }
   else{
    let bmi=(weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.6)
    {
        result.innerHTML=`<span>${bmi}<br></span>`
        const span=document.createElement(`span`);
        span.innerHTML="Under Weight"
        span.style.color="yellow"
        document.querySelector('#results').appendChild(span)
        
    }
    else if(bmi>=18.6 && bmi<24.9)
        {
            result.innerHTML=`<span>${bmi}<br></span>`
            const span=document.createElement(`span`);
            span.innerHTML="Normal Weight"
             span.style.color="green"
            document.querySelector('#results').appendChild(span)
            
        }
     else
     {
        result.innerHTML=`<span>${bmi}<br></span>`
        const span=document.createElement(`span`);
        span.innerHTML="Over Weight"
           span.style.color="red"
        document.querySelector('#results').appendChild(span)
        
     }
 

   }


});