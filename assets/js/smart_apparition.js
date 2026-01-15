export default function smartApparition(){
 const $apparitionTrans2x = document.querySelectorAll("div[data-smart-apparition-trans2x]"),
        $apparitionTrans = document.querySelectorAll("div[data-smart-apparition-trans]"),
        $apparition = document.querySelectorAll("div[data-smart-apparition]");


const cbApparitionTrans2x = (entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0%)";
            entry.target.style.transition = "all 2s ease-in-out 0.6s";            
        }else{
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateX(-20%)";
            entry.target.style.transition = "all 2s ease-in-out 0.6s";
        }
    })
    }
const observerApparitionTrans2x=new  IntersectionObserver(cbApparitionTrans2x,{
    threshold:[0.5,0.75]
});
$apparitionTrans2x.forEach(el =>{
    observerApparitionTrans2x.observe(el);
});


 const cbApparitionTrans = (entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0%)";
            entry.target.style.transition = "all 2s ease-in-out 0.3s";            
        }else{
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateX(-5%)";
            entry.target.style.transition = "all 2s ease-in-out 0.3s";
        }
    })
 }
 const observerApparitionTrans=new  IntersectionObserver(cbApparitionTrans,{
    threshold:[0.5,0.75]
 });
 $apparitionTrans.forEach(el =>{
     observerApparitionTrans.observe(el);
 });

 
 const cbApparition = (entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transition = "all 2s ease-in-out 0.3s";            
        }else{
            entry.target.style.opacity = "0";
            entry.target.style.transition = "all 2s ease-in-out 0.3s";
        }
    })
 }
 const observerApparition=new  IntersectionObserver(cbApparition,{
    threshold:[0.5,0.75]
 });
 $apparition.forEach(el =>{
     observerApparition.observe(el);
 });


}