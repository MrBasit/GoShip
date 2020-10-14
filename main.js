let index = 2;

function CurrentSlide(n){
  index = n;
  changeSlides();
  updateCurrentSlide(n);
  resetTimer();
}

function updateCurrentSlide(n){ 
  let dots = document.getElementsByClassName('dot');
  for(i=0;i<dots.length;i++){
    dots[i].className="dot";
  }
  dots[n-1].className="dot active";
}

function changeSlides(){
  
  const Sliderr = document.querySelector('#Slider');
  if(index==1) {
      Sliderr.style.backgroundImage = "URL('imageimg1.jpg')";
    }
    if(index==2) {
      Sliderr.style.backgroundImage = "URL('imageimg2.jpg')";
    }
    if(index==3) {
      Sliderr.style.backgroundImage = "URL('imageimg3.jpg')";
    }
    if(index==4) {
      Sliderr.style.backgroundImage = "URL('imageimg4.jpg')";
    } 
    if(index>=4){
      index=1;
    }else{
      index++;
    }
}

// Reset Time Func ( Whem click to indicators or controls button )
function resetTimer(){
  // Stop Timer
  clearInterval(timer);

  // then started again timer
  timer=setInterval(autoPlay, 4000);
}

// Auto Play Func
function autoPlay(){
  // Call NextSlide Func
  updateCurrentSlide(index);
  changeSlides();
  // Call updateindicator Func
  
}

let timer=setInterval(autoPlay, 4000);

// Menu
const menuIcon = document.querySelector('.hamburger__menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change');
})