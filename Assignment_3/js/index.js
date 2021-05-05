const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>
{   
    console.log('inside addListerner')
        e.preventDefault();
        checkInputs();
       
});

function checkInputs(){
        //get the values from the inputs
        const usernameValue = username.value.trim();
        console.log(usernameValue);
        const emailValue = email.value.trim();
        const password1Value = password1.value.trim();
        const password2Value = password2.value.trim();

        if(usernameValue === ''){
            setErrorFor(username,'Username can not be blank');
        }
        else
        {
            setSuccessFor(username);
        }

        if(emailValue === ''){
            setErrorFor(email,'Email can not be blank');
        }
        else if(!isEmail(emailValue)){
            setErrorFor(email,'Email is not valid');
        }
        else
        {
            setSuccessFor(email);
        }
        if(password1Value === ''){
            setErrorFor(password1,'password can not be blank');
        }else if(password1Value.length<8){
            setErrorFor(password1,"Password must be at least 8 characters long.")
        }
        else
        {
            setSuccessFor(password1);
        }
        if(password2Value === ''){
            setErrorFor(password2,'password can not be blank');
        }else if(password2Value !== password1Value)
        {
            setErrorFor(password2,'password are different');
        }else if(password2Value.length<8){
            setErrorFor(password1,"Password must be at least 8 characters long.")
        }
        else
        {
            setSuccessFor(password2);
        }
}

function setErrorFor(input,message)
{
        const formcontrol = input.parentElement;
        console.log(formcontrol)
        const small = formcontrol.querySelector('small');
        // add error message inside small
        small.innerText = message;
        // add error class
        formcontrol.className = 'form-control error';
}
function setSuccessFor(input)
{   
    const formcontrol = input.parentElement;
    console.log(formcontrol)
    // add error class
    formcontrol.className = 'form-control success';

}

function isEmail(email){
    
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
   
}