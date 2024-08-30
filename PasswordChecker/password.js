let inputfield=document.querySelector('#password');
let outputfield=document.querySelector('#output');
inputfield.addEventListener('input', function(){
    console.log(inputfield.value);
    let password = inputfield.value;
    if(password.length <8){
        outputfield.innerText = 'Password is too short';
        outputfield.style.color = 'red';
    }
    else{
        outputfield.innerText='Password is long enough';
        outputfield.style.color='green';
        //a-z
        //A-Z
        //0-9;
        //special characters
    }
    
})