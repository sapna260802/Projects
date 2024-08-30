let h1=document.querySelector("h1");
let add=document.querySelectorAll("button")[0]
let submit=document.querySelectorAll("button")[1]
let para= document.querySelector("p");
console.log(h1,add,submit,para);

let count=0;

add.addEventListener("click",(e) =>{
    count=count+1;
   h1.innerHTML=count;
    
})

submit.addEventListener("click",(e)=>{
    para.innerHTML=para.innerHTML +  ` ${count}  - `;
    count=0;
    h1.innerHTML=count;
})
