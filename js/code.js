const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',e =>{
    e.preventDefault()
    checkInputs()
})
function checkInputs() {
    //trim to remove white spaces
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    
    if(usernameValue ===""){
        setErrorFor('username cannot be blank')
    }else{
        setSuccessFor(username)
    }

    if(emailValue ===""){
        setErrorFor('email cannot be blank')
    }else if
        (!isEmail(emailValue)){
            setErrorFor('Not a valid email')
        }else{
            setSuccessFor(email)
        }

        if(passwordValue ===""){
            setErrorFor('password cannot be blank')
        }else{
            setSuccessFor(password)
        }
            if(password2Value ===""){
                setErrorFor('password2 cannot be blank')
            }else{
                setSuccessFor(password2)
            }
}
function setErrorFor(input,message){
    const formControl = input.parentElement;
    formControl.querySelector('small')
    formControl.className = 'form-control error'
   small.innerText = message
    console.log(formControl)
}
  function setSuccessFor(input){
   const formControl = input.parentElement;
    formControl.querySelector('small')
    formControl.className = 'form-control success'
  }

function isEmail(email){

       return /()[\][0-9]{1,3}\$/.test
        (email)
}

