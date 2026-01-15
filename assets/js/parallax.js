
export default function parallax(){
    document.addEventListener("mousemove", function parallax(el){
        this.querySelectorAll(".layer").forEach(
            layer =>{
                const $speed= layer.getAttribute('data-speed');
                const x =(el.clientX * $speed)/250;
                const y = (el.clientY * $speed)/250;
    
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
                layer.style.transition = `transform 0.3s ease-out`;
    
            }
        )
    });
    
};