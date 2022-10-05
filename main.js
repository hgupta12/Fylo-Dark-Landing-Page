const emailInputDiv = document.querySelector('.email__input');
const emailInput = document.querySelector('.email__input input');
const btn = document.querySelector('.email_input');
btn.addEventListener('click', ()=>{
    if (!emailInput.value) {
       emailInputDiv.classList.add('invalid'); 
       setTimeout(()=>{
           emailInputDiv.classList.remove('invalid')
       },1000);
    }
    else{
        console.log(emailInput.value);
        emailInput.value=''
    }
})