export default function serviceWorker(){
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js')
    
    }
}