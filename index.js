var form = document.querySelector('form#form1')
const list = document.createElement('ul')
const tasks = document.querySelector('#tasks')

lastid = 0

const handleSubmit = function(ev) {
  ev.preventDefault()
  form = document.querySelector('form#form1')
  const task = document.createElement('li')
  task.textContent = 'Name: ' + form.name.value + ' Deadline: ' + form.deadline.value
//   console.log(task)
  
  task.setAttribute('id',lastid)

  var removeButton = document.createElement('button')
  removeButton.appendChild(document.createTextNode("remove"))
  removeButton.setAttribute('onClick','removeName("'+lastid+'")')
  console.log(lastid)

  task.appendChild(removeButton)
  lastid +=1
  list.appendChild(task)
  tasks.appendChild(list)

  form.reset()
  form.name.focus()
}

lastid+=1
form.addEventListener('submit', handleSubmit)

function removeName(itemid){
    // console.log(itemid)
    // console.log(tasks.childNodes)
    const item = document.getElementById(itemid)
    // console.log(tasks.childNodes[itemid])
    item.parentNode.removeChild(item);
}



// $.noConflict();
// jQuery(document).ready(function($) {
//     $('#datePicker').datepicker({
//         format: 'mm/dd/yyyy'
//     })

//     console.log(document.querySelector('#datePicker').textContent)

// });