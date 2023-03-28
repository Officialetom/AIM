const toggleBtn = document.getElementById('toggle-btn');
const Links = document.getElementById('display-item');
const CloseBtn = document.getElementById('close-btn');
const Body = document.getElementById('body');

toggleBtn.addEventListener('click', ()=>{
    Links.classList.toggle('active');
    Body.classList.toggle('active');

})

CloseBtn.addEventListener('click', ()=>{
    Links.classList.toggle('active');
    Body.classList.toggle('active');
})