
var allImgs = Array.from( document.querySelectorAll("img"));
var rightArrow = document.querySelector(".fa-arrow-right");
var leftArrow = document.querySelector(".fa-arrow-left");
var  closeIcon = document.querySelector(".fa-xmark");
var currentIndex;
var innerDiv =document.querySelector(".innerDiv");
var layer = document.querySelector(".layer");
for(var i = 0; i <allImgs.length; i++){
    allImgs[i].addEventListener("click",function(e){
   
    layer.classList.remove("d-none")
    var currentImgSrc = e.target.getAttribute("src");

     currentIndex=  allImgs.indexOf(e.target);
    
    innerDiv.style.backgroundImage = `url('${currentImgSrc}')`

    })

}


function getNex(){
    currentIndex++; // next element index
    if( currentIndex == allImgs.length){

    currentIndex = 0;

    }

var nextImageSrc =   allImgs[currentIndex].getAttribute("src");
innerDiv.style.backgroundImage = `URL(${nextImageSrc})`

}
function getPrev(){
    currentIndex--; // next element index
    if( currentIndex == -1){

    currentIndex = allImgs.length -1;

    }

var nextImageSrc =   allImgs[currentIndex].getAttribute("src");
innerDiv.style.backgroundImage = `URL(${nextImageSrc})`

}
function hideDiv(){
   layer.classList.add("d-none")
}

rightArrow.addEventListener("click" , getNex);
leftArrow.addEventListener("click" , getPrev);
closeIcon.addEventListener("click" , hideDiv);


document.addEventListener("keydown" , function(e){

if(e.code == "Escape"){
    hideDiv();
}
else if(e.code == "ArrowLeft"){
getPrev();

}
else if(e.code == "ArrowRight"){
getNex();

}
})

layer.addEventListener("click" , function(e){

if(e.target == layer){
    hideDiv()
}
})