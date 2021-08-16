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
    top:element.offsetTop + 20,
    behavior: 'smooth'
  })
}

// smooth scroll (find out more button)
findOutMore.addEventListener('click', () => {
  scrollTo(this.secondPage);
})

// smooth scroll first page
firstCircle.addEventListener('click', () => {
  this.firstCircle.style.fill = '#7050e5';

  this.secondCircle.style.fill = '#ff8b00';
  this.thirdCircle.style.fill = '#ff8b00';

  scrollTo(this.firstPage);
})

// smooth scroll second page
secondCircle.addEventListener('click', () => {
  this.secondCircle.style.fill = '#7050e5';

  this.firstCircle.style.fill = '#ff8b00';
  this.thirdCircle.style.fill = '#ff8b00';

  scrollTo(this.secondPage);
})

// smooth scroll third page
thirdCircle.addEventListener('click', () => {
  this.thirdCircle.style.fill = '#7050e5';

  this.firstCircle.style.fill = '#ff8b00';
  this.secondCircle.style.fill = '#ff8b00';

  scrollTo(this.thirdPage);
})

// change circle color
window.addEventListener('scroll', () => {
  const lastPosition = window.scrollY

  if ( lastPosition > this.firstPage.offsetTop ) {
    this.firstCircle.style.fill = '#7050e5';

    this.secondCircle.style.fill = '#ff8b00';
    this.thirdCircle.style.fill = '#ff8b00';
  }

  if ( lastPosition > this.secondPage.offsetTop ) {
    this.secondCircle.style.fill = '#7050e5';

    this.firstCircle.style.fill = '#ff8b00';
    this.thirdCircle.style.fill = '#ff8b00';
  }

  if ( lastPosition > this.thirdPage.offsetTop ) {
    this.thirdCircle.style.fill = '#7050e5';

    this.firstCircle.style.fill = '#ff8b00';
    this.secondCircle.style.fill = '#ff8b00';
  }
})

// popup video
function popupFunc() {
  popup.classList.toggle("show");
  wrapper.style.backgroundImage = 'none';
  
  if (popup.paused){ 
      popup.play(); 
    }
    else{ 
      popup.pause();
      wrapper.style.backgroundImage = "url('/img/background/videoBack.png')";
    }
}