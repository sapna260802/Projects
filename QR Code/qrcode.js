let qrinput=document.getElementById('qr-input');
let qrimg=document.getElementById('qr-img');
let qrbutton=document.getElementById('qr-button');
// console.log(qrinput,qrimg,qrbutton);
qrbutton.addEventListener('click',()=>{
    let inputValue=qrinput.value;
    console.log(inputValue);
    if(!inputValue){
        alert('Please enter a valid URL');
        return;
    }
    else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR code for ${inputValue}`;
    }
    
})
