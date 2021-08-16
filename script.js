var findOutMore = document.getElementById('findButt');

var firstCircle = document.getElementById('c1');
var secondCircle = document.getElementById('c2');
var thirdCircle = document.getElementById('c3');

var firstPage = document.getElementById('s1');
var secondPage = document.getElementById('s2');
var thirdPage = document.getElementById('s3');

var videoBack = document.getElementById("video-overlay");
var wrapper = document.getElementById("wrapper");
var popup = document.getElementById("myPopup");

function scrollTo(element){
  window.scroll({
    left:0,
    top:element.offsetTop,
    behavior: 'smooth'
  })
}

// smooth scroll
findOutMore.addEventListener('click', () => {
  scrollTo(this.secondPage);

})

firstCircle.addEventListener('click', () => {
  this.firstCircle.style.fill = '#7050e5';

  this.secondCircle.style.fill = '#ff8b00';
  this.thirdCircle.style.fill = '#ff8b00';

  scrollTo(this.firstPage);
})

secondCircle.addEventListener('click', () => {
  this.secondCircle.style.fill = '#7050e5';

  this.firstCircle.style.fill = '#ff8b00';
  this.thirdCircle.style.fill = '#ff8b00';

  scrollTo(this.secondPage);
})

thirdCircle.addEventListener('click', () => {
  this.thirdCircle.style.fill = '#7050e5';

  this.firstCircle.style.fill = '#ff8b00';
  this.secondCircle.style.fill = '#ff8b00';

  scrollTo(this.thirdPage);
})

// popup video
function popupFunc() {
  popup.classList.toggle("show");
  wrapper.style.backgroundImage = 'none';
  
  if (popup.paused){ 
      popup.play(); 
      wrapper.style.width = '640px';
      wrapper.style.height = '376px'
    }
    else{ 
      popup.pause();
      wrapper.style.width = '500px';
      wrapper.style.height = '300px'
      wrapper.style.backgroundImage = "url('/img/videoBack.png')";
    }
}