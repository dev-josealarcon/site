let activeIndex = 0;
const $carouselProjects = document.querySelector(".carousel-container-projects");
const $slideProjects = [...document.querySelectorAll(".carousel-slide-projects")];
const $portal = document.querySelector(".portal");

function cbProjects(entries){
  const entry = entries.find(e => e.isIntersecting);

  if (entry) {
    let index = $slideProjects.findIndex(
      e => e === entry.target
    );
    
    activeIndex = index;

    if(activeIndex !== 0 ){
      $portal.classList.add("active");           
    }else {
      $portal.classList.remove("active"); 
    }
  }

}

const observerProjects = new IntersectionObserver(cbProjects, {
  root: $carouselProjects,
  rootMargin: "0px",
  threshold: 0.75
});

$slideProjects.forEach(el => {
  observerProjects.observe(el);
});



export function previousProjects() {
  if(activeIndex > 0){
    let prev1=$slideProjects[activeIndex - 1];
    $slideProjects[activeIndex - 1].scrollIntoView();
    location.hash = prev1.children[0].id;
  } 
  if(activeIndex === 0) {
    let prev2=$slideProjects[$slideProjects.length - 1];
    $slideProjects[$slideProjects.length - 1].scrollIntoView();
   location.hash = prev2.children[0].id;
  }  
}

export function nextProjects() {
  if(activeIndex < $slideProjects.length - 1){
    let next1=$slideProjects[activeIndex + 1];
    $slideProjects[activeIndex + 1].scrollIntoView();
    location.hash = next1.children[0].id;
  } 
  if(activeIndex === $slideProjects.length - 1) {
    let next2=$slideProjects[0];
    $slideProjects[0].scrollIntoView();
    location.hash = next2.children[0].id;
  }
}

