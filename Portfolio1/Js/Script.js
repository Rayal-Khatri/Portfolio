const navMenu = document.getElementById('nav_menu'),
        navToggle = document.getElementById('nav_toggle'),
        navClose = document.getElementById('nav_close')
if(navToggle)
{
    navToggle.addEventListener('click', () =>{
        console.log(navMenu);
        navMenu.classList.add('show_menu')
    })
}

if(navClose)
{
    navClose.addEventListener('click',() =>
    {
        linkAction();
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')
function linkAction()
{
    navMenu.classList.remove('show_menu')
}        
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills_content')
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills()
{
    let itemClass = this.parentNode.className
    for(i=0; i<skillsContent.length; i++)
    {    
        skillsContent[i].className ='skills_content skills_close'
    }
    if(itemClass==='skills_content skills_close')
    {
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((el)=>
{
    el.addEventListener('click',toggleSkills)
})

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => 
{
    tab.addEventListener('click',()=>
    {
        const target = document.querySelector(tab.dataset.target)
    
        tabContents.forEach(tabContent =>
        {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab =>
        {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// Services Portion
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns= document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal_close')
let modal = function (modalClick)
{
    modalViews[modalClick].classList.add('active_modal')
}

modalBtns.forEach((modalBtn, i) => 
{
    modalBtn.addEventListener('click', ()=>
    {
        modal(i)
    })
})
modalCloses.forEach((modalClose) =>
{  
    modalClose.addEventListener('click', ()=>
    {
        modalViews.forEach((modalView) =>
        {
            modalView.classList.remove('active_modal')
        })
    })
})

let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});