const form = document.forms['access'];


form.addEventListener('submit', e => {
    e.preventDefault()
    const email = form.querySelector('#email')
    const submit = form.querySelector('#submit')
    const error = form.querySelector('#error')

    if (email.value === "") {
        error.innerHTML = 'please enter a valid email address'
        error.style.display = 'block'
    } else if (!email.value.includes('@') || !email.value.includes('.com')){
        error.innerHTML = `email must contain "@", ".com"`;
        error.style.display = 'block'
    }else{
        error.innerHTML = ""
        error.style.display = 'none'
    }
    
   
})

