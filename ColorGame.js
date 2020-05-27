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
var h1=document.getElementById("hi");
var blocks=document.getElementsByClassName('square');
var PickedColor=colors[Math.floor((Math.random()*(colors.length)))]; 
var chance=document.getElementById("chances");
var colorDisplay=document.getElementById("colorDisplay");
var win=0;
var time=20;
var timeShown=document.getElementById("time");
var chances=0;
var messageDisplay=document.getElementById("message");
var ResetButton=document.getElementById("reset");
var reset=0;
var easyBtn=document.getElementById("easybtn");
var hardBtn=document.getElementById("hardbtn");


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    time=20;
});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    time=10;
});







colorDisplay.textContent=PickedColor;
//ResetButton starting
ResetButton.addEventListener("click",function(){
    //Deleted all existing colors
    colors.splice(0,colors.length);
    //Now creating some new colors
    randomColors(6);
    PickedColor=colors[Math.floor((Math.random()*(colors.length)))]; 
    clearInterval(work);
    h1.style.backgroundColor="black";
    
    chances=0;
    win=0;
    time=20;
    reset=1;
    timeShown.textContent=time;
    chance.textContent=" ";
    
    
    colorDisplay.textContent=PickedColor;
    messageDisplay.textContent=" ";
    
    
    //Now starting the game again
    //Timer Remaning Section starting
    work=setInterval(function(){
        
        timeShown.textContent=time;
        time=time-1;
        if((win==1))
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
                if(win==0){
                    for(var j=0;j<blocks.length;j++)
                    {
                        blocks[j].style.backgroundColor=PickedColor;
                    }
                    chances=chances+1;
                    chance.textContent="Great!";
                    messageDisplay.textContent="You Are a Guess Master!";
                    h1.style.background=PickedColor;
                }
                win=1;
                
                
            }
            else{
                if(win==0)
                {
                    this.style.backgroundColor="#0c0c19";
                    messageDisplay.textContent="TRY AGAIN";
                    chances=chances+1;
                } 
            }
        });
    }
});

//ResetButton Ending


//Timer Remaning Section starting
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

//Time Remaning Section ending
//Code which decides the winner starting
for(var i=0;i<blocks.length;i++)
{
    blocks[i].style.backgroundColor=colors[i];

    blocks[i].addEventListener("click",function(){
        if(this.style.backgroundColor===PickedColor)
        {   
            if(win==0){
                for(var j=0;j<blocks.length;j++)
                {
                    blocks[j].style.backgroundColor=PickedColor;
                }
                if(reset==0)
                    chances=chances+1;
                chance.textContent="Great!";
                messageDisplay.textContent="You Are a Guess Master!";
                h1.style.background=PickedColor;
            }
            win=1;
            
            
        }
        else{
            if(win==0)
            {
                this.style.backgroundColor="#0c0c19";
                messageDisplay.textContent="TRY AGAIN";
                if(reset==0)
                    chances=chances+1;
            } 
        }
    });
}
//Code which decides the winner end



