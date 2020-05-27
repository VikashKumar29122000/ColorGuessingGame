var colors =["rgb(255, 0, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(255, 0, 255)"];


var blocks=document.getElementsByClassName('square');
var PickedColor=colors[3]; 
var chance=document.getElementById("chances");
var colorDisplay=document.getElementById("colorDisplay");
var win=0;
var chances=0;
colorDisplay.textContent=PickedColor;
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
                chance.textContent=chances;
            }
            win=1;
            
        }
        else{
            this.style.backgroundColor="#0c0c19";
            if(win==0)
            {
                chances=chances+1;
                chance.textContent=chances;
            }
            
        }
    });
}
