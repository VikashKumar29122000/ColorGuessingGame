var colors =[];
function randomColors(size)
{
    for(var z=0;z<size;z++)
    {
        var color="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
        colors.push(color);
    }
}
randomColors(6);
console.log(colors.length);

var blocks=document.getElementsByClassName('square');
var PickedColor=colors[Math.floor((Math.random()*(colors.length)))]; 
var chance=document.getElementById("chances");
var colorDisplay=document.getElementById("colorDisplay");
var win=0;
var time=10;
var timeShown=document.getElementById("time");
var chances=0;
var messageDisplay=document.getElementById("message");
colorDisplay.textContent=PickedColor;
var work=setInterval(function(){
    
    timeShown.textContent=time;
    time=time-1;
    if(win==1)
    {
        clearInterval(work);
    }
    if(time<0)
    {
        win=1;
        chance.textContent="YOU LOSE";
        clearInterval(work);
    }
    
},1000);
for(var i=0;i<blocks.length;i++)
{
    blocks[i].style.backgroundColor=colors[i];

    blocks[i].addEventListener("click",function(){
        if(this.style.backgroundColor===PickedColor)
        {
            for(var j=0;j<blocks.length;j++)
            {
                blocks[j].style.backgroundColor=PickedColor;
            }
            
            if(win==0){
                chances=chances+1;
                chance.textContent=`${chances} chances taken`;
            }
            win=1;
            messageDisplay.textContent="Correct!";
            
        }
        else{
            this.style.backgroundColor="#0c0c19";
            messageDisplay.textContent="TRY AGAIN";
            if(win==0)
            {
                chances=chances+1;
            }
            
        }
    });
}



