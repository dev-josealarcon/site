
export default function navProjects(){
    const $portal = document.querySelector(".portal");
    const $overallContainer = document.querySelector(".overall-container");
    const $linksNavProjects = document.querySelectorAll(".links-nav-projects a");


    $portal.addEventListener("click", ()=>{
        $overallContainer.classList.toggle("active-links-nav-projects");
        
    });


    $linksNavProjects.forEach(el =>{
        el.addEventListener("click", ()=>{
            
            setTimeout(() => {
                $overallContainer.classList.remove("active-links-nav-projects");
            }, 1000);
        });
    });

}

