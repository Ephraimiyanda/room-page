const backwards = document.querySelector(".previous");
const further = document.querySelector(".next");
const burger=document.querySelector(".burger");
const links = document.querySelector(".navbar ul");
const cross = document.querySelector(".close");

function displaybar(){
  links.classList.add("hidden");
}
function closebar(){
  links.classList.remove("hidden");
} 
burger.addEventListener("click", displaybar);
cross.addEventListener("click", closebar );



let article = document.querySelectorAll('.first');
let index = 0;



function previous(){
    article[index].classList.remove('active');
    index = (index - 1 + article.length)% article.length;
    article[index].classList.add('active');

}
backwards.addEventListener("click", previous)



function next(){
article[index].classList.remove('active');
index = (index + 1)% article.length;
article[index].classList.add('active');

}
further.addEventListener("click", next);






