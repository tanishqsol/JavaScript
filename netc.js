const par = document.getElementById
("move");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par.style.backgroundPositionY =  offset * -0.9 + "px";

})

const element =  document.querySelector('.myName')
element.classList.add('wow', 'fadeInDown')



const element3 =  document.querySelector('#skills')
element3.classList.add('wow', 'fadeInLeftBig_custom')

const element4 =  document.querySelector('#skill_one')
element4.classList.add('wow', 'fadeInLeftBig')

const element5 =  document.querySelector('#skill_two')
element5.classList.add('wow', 'zoomIn')

const element6 =  document.querySelector('#skill_three')
element6.classList.add('wow', 'fadeInRightBig')

const element7 =  document.querySelector('#skill_six')
element7.classList.add('wow', 'fadeInUpBig')

const element8 =  document.querySelector('#skill_five')
element8.classList.add('wow', 'bounceInUp')

const element9 =  document.querySelector('#skill_four')
element9.classList.add('wow', 'fadeInLeftBig')

const element10 =  document.querySelector('#cert')
element10.classList.add('wow', 'zoomIn')

const element11 =  document.querySelector('#cert_one')
element11.classList.add('wow', 'fadeInLeftBig')
const element12 =  document.querySelector('#cert_two')
element12.classList.add('wow', 'fadeInRightBig')
const element13 =  document.querySelector('#cert_three')
element13.classList.add('wow', 'fadeInLeftBig')
const element14 =  document.querySelector('#cert_four')
element14.classList.add('wow', 'fadeInRightBig')


const par2 = document.getElementById
("move2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par2.style.backgroundPositionY =  offset * -0.5 + "px";

})
const par3 = document.getElementById
("move3");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par3.style.backgroundPositionY =  offset * -0.5 + "px";

})

const div3 = document.getElementsByClassName("intro-text");
window.addEventListener("scroll", function scrollAppear()     

{
    var introText = document.querySelector(".intro-text");
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition =  window.innerHeight ;
    
    if(introPosition < screenPosition)
    {
        introText.classList.add('intro-appear')
    }
})


window.addEventListener('scroll',scrollAppear);

var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });