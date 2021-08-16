var findOutMore = document.getElementById('findButt');
var secondPage = document.getElementById('s2');
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
  scrollTo(secondPage);
})

// video back image none function
// videoBack.addEventListener('click', () => {
//   this.videoBack.style.display = 'none'
// })

// scroll 
new fullpage('#fullPage', {
  navigation: true,
  scrollOverflow: true
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