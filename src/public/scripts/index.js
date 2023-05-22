const toggler = document.querySelector('nav .logo-container i');
const navItems = document.querySelector('nav .nav-items ul');
toggler.addEventListener('click',()=>{
        if(toggler.classList.contains('fa-toggle-off')){
            toggler.classList.remove('fa-toggle-off');
            toggler.classList.add('fa-toggle-on');
            navItems.classList.remove('hide-bar');
            return;
        }

        toggler.classList.remove('fa-toggle-on');
        toggler.classList.add('fa-toggle-off');
        navItems.classList.add('hide-bar');
})


window.addEventListener('load',()=>{
    if(window.innerWidth <=620){
        navItems.classList.add('hide-bar');
    }
})
window.addEventListener('resize',()=>{
        if(window.innerWidth <= 620){
            navItems.classList.add('hide-bar');
        }
})