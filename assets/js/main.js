
function changeImage(imgName){
    image = document.getElementById('imgDisp');
    image.src = imgName;
    let lachs = document.querySelector('body')
    lachs.style.background ='#4242ac'

}

function changeImagea(imgNamee)
{
image = document.getElementById('imgDisp');
image.src = imgNamee;
    let bb = document.querySelector('body')
    bb.style.background =' #302f2f'
}

function drehen(){
let spin =document.getElementById("imgDisp")
    spin.classList.toggle("qwer")
}
