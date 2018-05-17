var form = document.querySelector('form#form1')
const tasks = document.querySelector('#tasks')
const taskArray = []

lastid = 0

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
  form = document.querySelector('form#form1')

  const task = {
    'Name': form.name.value,
    'Deadline': form.deadline.value
  }

  addToArray(task)
  const list = renderList(task)
  list.setAttribute('id',lastid)

  var removeButton = document.createElement('button')
  removeButton.appendChild(document.createTextNode("remove"))
  removeButton.setAttribute('onClick','removeName("'+lastid+'")')

  lastid +=1
  list.appendChild(removeButton)
  tasks.appendChild(list)

  form.reset()
  form.name.focus()
}

lastid+=1
form.addEventListener('submit', handleSubmit)
console.log(tasks)

function removeName(itemid){
    const item = document.getElementById(itemid)
    item.parentNode.removeChild(item);
}

function addToArray(task) {
  taskArray.push(task)
}