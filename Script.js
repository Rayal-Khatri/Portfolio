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