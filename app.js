var x=y=z=0
var myinterval
var state=false
var start
function start_timer()
{
    x=y=z=0
    myinterval =setInterval(mytimer,10)
    start = document.getElementById('btn1')
    start.disabled=true
}
function mytimer()
{
    x=x+1
    if(x===100)
    {
        x=0
        y=y+1
        if(y===60)
        {
            y=0
            z=z+1
            if(z===60)
            {
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML=`<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+`</h1>`
}
function resume_timer()
{
    state=!state
    if (state===true)
    {
        clearInterval(myinterval)
    }
    else
    {
        myinterval=setInterval(mytimer,10)
    }
}
function clear_timer()
{
    x=y=z=0
    document.getElementById('result').innerHTML=`<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+`</h1>`
    start=document.getElementById('btn1')
    start.disabled=false
}