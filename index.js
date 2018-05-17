const form = document.querySelector('form#form1')

id = 0
lastid = 0
itemid = 0

function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'

  return colorDiv
}

function removeName(list, itemid){
  var item = document.getElementById(itemid);
  list.removeChild(item);
}

function renderListItem(label, value) {
  const item = document.createElement('li')
  const term = document.createElement('dt')
  term.textContent = label

  const description = document.createElement('dd')

  try {
    description.appendChild(value)
  } catch(e) {
    description.textContent += value
  }

  item.appendChild(term)
  item.appendChild(description)
  return item
}

function renderList(data) {
  const list = document.createElement('dl')
  Object.keys(data).forEach(label => {
    const item = renderListItem(label, data[label])
    list.appendChild(item)
  })
  return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const task = {
    'Name': form.name.value,
    'Deadline': form.deadline.value,
  }

  list = renderList(task)
  list.setAttribute('id','item'+lastid)

  lastid = id
  itemid = id++
  
  var removeButton = document.createElement('button')
  removeButton.appendChild(document.createTextNode("remove"))
  removeButton.setAttribute('onClick','removeName("list,'+'item'+lastid+'")')
  console.log('removeName("list,'+'item'+lastid+'")')

  list.appendChild(removeButton)

  const tasks = document.querySelector('#tasks')
  tasks.appendChild(list)

  form.reset()
  form.name.focus()
}

form.addEventListener('submit', handleSubmit)

// $.noConflict();
// jQuery(document).ready(function($) {
//     $('#datePicker').datepicker({
//         format: 'mm/dd/yyyy'
//     })

//     console.log(document.querySelector('#datePicker').textContent)

// });