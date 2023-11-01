const form = document.forms['access'];

console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault()
    const email = form.querySelector('#email')
    const submit = form.querySelector('#submit')
    const error = form.querySelector('#error')

    if (email.value === "") {
        error.innerHTML = 'please enter a valid email address'
    } else if (!email.value.includes('@') || !email.value.includes('.com')){
        error.innerHTML = 'please enter a valid email address'
    }else{
        error.innerHTML = ""
        
    }
})

console.log(email);