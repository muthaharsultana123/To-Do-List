let input =  document.querySelector('#new_task_input')
let button = document.querySelector('#new_task_submit')

const display = (work) => {
    let task = document.createElement('div')
    let text = document.createElement('div')
    let btn =  document.createElement('button')
    let _text = document.createTextNode(work)
    let _btntext = document.createTextNode('DELETE')
    text.appendChild(_text)
    btn.appendChild(_btntext)
    task.appendChild(text)
    task.appendChild(btn)
    task.classList.add('task')
    text.classList.add('display')
    btn.setAttribute('id','delete')
    btn.addEventListener('click',() =>{
        task.remove()
    })
    return task
}

button.addEventListener('click' , () => {
    const list = document.querySelector('#list')
    list.appendChild(display(input.value))
    // list.innerHTML= display(input.value)
})
