const backwards = document.querySelector(".previous");
const further = document.querySelector(".next");
const retro = document.querySelector(".retro");
var images = ["desktop-image-hero-1.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg"];
var i = 0;
function setImg(){
    return retro.setAttribute('src', 'images/'+images[i]);
};

function previous(){
    if(i <= 0)i =images.length;
    i--;
    return setImg();
}
backwards.addEventListener("click", previous)

function next(){
if(i >= images.length -1)i = -1;
i++;
return setImg();

}
further.addEventListener("click", next);
var firstDiv = 0;
function show(){
    $(".firstp").hide();
    $(".firstp:eq("+ firstDiv +")").show();
}
show()
function nextparagraph(){
if(firstDiv==$(".firstp").length-1){
    firstDiv = 0;
}else{
    firstDiv ++;
}
show()
}
ligth.addEventListener("click", nextparagraph);