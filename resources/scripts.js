const imgs = document.querySelectorAll('.hero-img');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

let n = 0;

function changSlide () {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0) {
        n--;
    }
    else{
        n = imgs.length -1 ;
    }
    changSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1 ) {
        n++;
    }
    else{
        n = 0;
    }
    changSlide();
})

