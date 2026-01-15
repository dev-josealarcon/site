let activeIndex = 0;
const $carouselAbout = document.querySelector(".carousel-container-about");
const $slideAbout = [...document.querySelectorAll(".carousel-slide-about")];

function cbAbout(entries){
  const entry = entries.find(e => e.isIntersecting);
  if (entry) {
    let index = $slideAbout.findIndex(
      e => e === entry.target
    );
    
    activeIndex = index;
    
  }
}

const observerAbout = new IntersectionObserver(cbAbout, {
  root: $carouselAbout,
  rootMargin: "0px",
  threshold: 0.75
});

$slideAbout.forEach(el => {
  observerAbout.observe(el);
});

export function previousAbout() {
  if(activeIndex > 0){
    let prev1=$slideAbout[activeIndex - 1];
    $slideAbout[activeIndex - 1].scrollIntoView();
    location.hash = prev1.children[0].id;
  } 
  if(activeIndex === 0) {
    let prev2=$slideAbout[$slideAbout.length - 1];
    $slideAbout[$slideAbout.length - 1].scrollIntoView();
   location.hash = prev2.children[0].id;
  }  
}

export function nextAbout() {
  if(activeIndex < $slideAbout.length - 1){
    let next1=$slideAbout[activeIndex + 1];
    $slideAbout[activeIndex + 1].scrollIntoView();
    location.hash = next1.children[0].id;
  } 
  if(activeIndex === $slideAbout.length - 1) {
    let next2=$slideAbout[0];
    $slideAbout[0].scrollIntoView();
    location.hash = next2.children[0].id;
  }
}