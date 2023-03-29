let screen=document.getElementById('screen');
bt=document.querySelectorAll('button');
let sv='';
for(item of bt)
{
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;

        if(buttonText=='*')
        {
            sv+= buttonText;
            screen.value =sv;
        }

        else if(buttonText=='C')
        {
            // screen.value = "";
            sv = "";
            screen.value=sv;
        }

        else if(buttonText=='=')
        {
            screen.value = eval(sv);
        }

        else
        {
            sv+=buttonText;
            screen.value=sv;
        }
    })
}