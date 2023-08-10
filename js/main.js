const slideshow = document.querySelector('.slideshow');

let x= setInterval(() => {
const firstchild = slideshow.firstElementChild
firstchild.classList.add('icon-out')
let thirdicon = slideshow.children[3]
thirdicon.classList.add('light')
thirdicon.previousElementSibling.classList.remove('light')
setTimeout(() => {
    slideshow.removeChild(firstchild)
    slideshow.append(firstchild)
    setTimeout(() => {
        firstchild.classList.remove('icon-out')
    },500)
   
},500)
},3000)





























