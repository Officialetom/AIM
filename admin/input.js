const FileInput = document.getElementById('file');
const FileBtn = document.getElementById('file-btn');

FileInput.addEventListener('change', ()=>{
    var length  = FileInput.files.length;
    FileBtn.innerText = length + " file(s) Choosen";
    FileBtn.style.backgroundColor = "orange";
})