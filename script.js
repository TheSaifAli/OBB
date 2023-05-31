const enrollEl= document.getElementById('enrollInput');
const passEl = document.getElementById('passInput');
const formEl = document.querySelector('form');

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu')
const nav_list = document.querySelector('.nav_list');

// HamburgerMenu Scripting
openMenu.addEventListener('click',()=>{
    nav_list.style.display ='block';
    nav_list.style.right ='0';
})
closeMenu.addEventListener('click',()=>{
    nav_list.style.right = '-100%'
})


formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    const enrollValue = enrollEl.value;
    const passValue = passEl.value;
    if(enrollValue == "" && passValue == "")
    {
        alert("Please fill the credentials!");
    }
    if(enrollValue == "admin" && passValue == "admin"){
        window.location.href="student.html";
    }
}
);

