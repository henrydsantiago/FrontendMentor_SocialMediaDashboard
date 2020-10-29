let darkMode = window.matchMedia('(prefers-color-scheme: dark)')
let checkbox = document.querySelector('#checkbox')

if (darkMode.matches){
    checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function (e) {
    if(this.checked){
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }
})