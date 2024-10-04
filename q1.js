const icon=document.querySelector(".icon");
const form=document.querySelector(".form")
const input=document.querySelectorAll("input")
console.log(input);

const label=document.querySelectorAll("label")
const button=document.querySelector("button")
const container=document.querySelector(".container")
// console.log(icon);
icon.addEventListener('click',changeColor)




function changeColor() {
    console.log(input);
    
    container.style.backgroundColor="gray";
    input.map((item)=>{
        item.addEventListener("input",()=>{console.log(item);
        })
    })
    
    button.style.backgroundColor="green";
    form.style.backgroundColor="white";
    
}