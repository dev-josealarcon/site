export default function particles(){
    const colorsParticles = ["#6e6e6e","#3C4504","#054654"];
    const numParticles = 35;
    const particles = [];
    
    for(let i=0;i<numParticles;i++){
        let particle = document.createElement("span");
        particle.classList.add("ball");
        particle.style.position="absolute";
        particle.style.borderRadius="50%";
        particle.style.opacity = "0.7";
        particle.style.background = colorsParticles[Math.floor(Math.random()*colorsParticles.length)];
        particle.style.left=`${Math.floor(Math.random()*80)}vw`;
        particle.style.top=`${Math.floor(Math.random()*80)}vh`;
        particle.style.transform=`scale(${Math.random()})`;
        particle.style.width = `${Math.random()/3}rem`;
        particle.style.height = particle.style.width;
    
        particles.push(particle);
        document.querySelector('.overall-container').append(particle);
    }
    
    particles.forEach((el,i)=>{
        let to = {
            x :Math.random()*(i % 2===0? -11:11),
            y:Math.random()*12
        };
        let anim = el.animate(
           [
               {transform:"translate(0,0)"},
               {transform:`translate(${to.x}rem, ${to.y}rem)`}
           ],
           {
               duration:(Math.random() + 1) * 5000,
               direction: "alternate",
               fill: "both",
               iterations: Infinity,
               easing: "ease-in-out"
           }
        );
    });


};
