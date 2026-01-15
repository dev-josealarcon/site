export default function navMenu(){
    const $main = document.querySelector(".main");
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    const $social= document.querySelector(".social");
    let $portal = document.querySelector(".portal");

    const cbMain = (entries) =>{
        entries.forEach(entry  =>{
            const  id = entry.target.getAttribute("id"),
                 $linkScroll = document.querySelector(`a[data-scroll-spy][href="#${id}"]`);

            if(entry.isIntersecting ){
                $linkScroll.classList.add("active-data-scroll-spy");
                if(id === "projects"){
                    $social.style.opacity='0';
                    $social.style.display='none';
                    $portal.style.visibility='visible';
                    $portal.style.opacity='1';
                }else{
                    $social.style.display='flex';
                    $social.style.opacity='1';
                    $portal.style.visibility='none';
                    $portal.style.opacity='0';
                }  
                

                 location.hash= '#'+ id;
            }else{
                $linkScroll.classList.remove("active-data-scroll-spy");
            }


        })
    }

    const observer = new IntersectionObserver(cbMain,{
        root: $main,
        threshold: 1
    });

    $sections.forEach(el => observer.observe(el));

}

