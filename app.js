

let number1 = document.querySelector(".number1")
let number2 = document.querySelector(".number2")
let number3 = document.querySelector(".number3")



let count = 1

window.addEventListener("DOMContentLoaded",()=>{
   let count = setInterval(() => {
        number1.innerText ++
        if(number1.innerText == 500){
            clearInterval(count)
        }
    }, 1);
})

window.addEventListener("DOMContentLoaded",()=>{
    let count = setInterval(() => {
        number2.innerText++
         if(number2.innerText == 17140){
             clearInterval(count)
         }
     }, 1);
 })

 window.addEventListener("DOMContentLoaded",()=>{
    let count = setInterval(() => {
        number3.innerText ++
         if(number3.innerText == 1500){
             clearInterval(count)
         }
     }, 1);
 })