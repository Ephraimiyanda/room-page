const backwards = document.querySelector(".previous");
const further = document.querySelector(".next");
const retro = document.querySelector(".retro");
var burger = document.querySelector(".burger");
var list =document.querySelector(".unordered");
var close = document.querySelector(".close");

var images = ["desktop-image-hero-1.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg"];
var i = 0;

let article = document.querySelectorAll('.first');
let index = 0;

function setImg(){
    return retro.setAttribute('src', 'images/'+images[i]);
};

function previous(){
    article[index].classList.remove('active');
    index = (index - 1 + article.length)% article.length;
    article[index].classList.add('active');

    if(i <= 0)i =images.length;
    i--;
    return setImg();
}
backwards.addEventListener("click", previous)

function next(){
    
article[index].classList.remove('active');
index = (index + 1)% article.length;
article[index].classList.add('active');

if(i >= images.length -1)i = -1;
i++;
return setImg();


}
further.addEventListener("click", next);


function displayList(){
    list.classList.remove("base")
}
function closeList(){
    list.classList.add("base")
}
burger.addEventListener("click", displayList);
close.addEventListener("click", closeList);

