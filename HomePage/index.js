var navbar1=document.getElementById('navbar1')
var sticky=navbar1.offsetTop;
var sticky2=navbar1.offsetTop+navbar1.offsetHeight;
var navbar2=document.getElementById('navbar2')
var img=document.getElementById('img')
var text=document.getElementsByClassName('list_element')

function showImage(visible){
    img.style.visibility=(visible? 'visible':'hidden')

}

function Scroll(){
    if(window.pageYOffset>=sticky){
        navbar1.classList.add('sticky1');
        showImage(false)
        
    }
    if(window.pageYOffset>=sticky2){
        navbar2.classList.add('sticky2');
        showImage(false)
    }
    else{
        navbar1.classList.remove('sticky1');
        navbar2.classList.remove('sticky2');
        showImage(true)

    }
}

window.onscroll=function(){Scroll()}

