// console.log("it works.")
const heading = document.querySelector('#h2')

const button = document.querySelector('#button1')
button.addEventListener('click', function(f) {
    heading.textContent = 'Changed!'
})

const button2 = document.querySelector('#submitButton')
button2.addEventListener('click', function(f) {
    console.log(heading.textContent)
    const text = document.querySelector('#form1').elements.item(0).value
    heading.textContent = text
    console.log(heading.textContent)
})

console.log(heading.textContent)


