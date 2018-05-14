// console.log("it works.")
const heading = document.querySelector('h1')

const button = document.querySelector('#button1')
button.addEventListener('click', function(f) {
    heading.textContent = 'Changed!'
})


