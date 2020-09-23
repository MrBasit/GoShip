let slideNumber = 1;
Slide(slideNumber);

function CurrentSlide(n){ 
  Slide(n);
}

function Slide(n){
  Sliderr = document.getElementById("Slider");
  dots = document.getElementsByClassName("dot");
  if(n==1) {
    Sliderr.style.backgroundImage = "URL('imageimg1.jpg')";
  }
  if(n==2) {
    Sliderr.style.backgroundImage = "URL('imageimg2.jpg')";
  }
  if(n==3) {
    Sliderr.style.backgroundImage = "URL('imageimg3.jpg')";
  }
  if(n==4) {
    Sliderr.style.backgroundImage = "URL('imageimg4.jpg')";
  } 
  for(i=0;i<dots.length;i++){
    dots[i].className="dot";
  }
  dots[n-1].className="dot active";
}