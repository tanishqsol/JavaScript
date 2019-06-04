const par = document.getElementById
("move");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par.style.backgroundPositionY =  offset * -0.9 + "px";

})

const element =  document.querySelector('.myName')
element.classList.add('wow', 'fadeInDown_custom')

const element2 =  document.querySelector('.mef')
element2.classList.add('wow', 'fadeInRightBig')

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


const par2 = document.getElementById
("move2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par2.style.backgroundPositionY =  offset * -0.5 + "px";

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

