document.addEventListener('DOMContentLoaded', async function(event) {

  // Step 1: Make the world's tiniest to-do app
  let db = firebase.firestore()

  let form = document.querySelector(`form`)
  form.addEventListener(`submit`, async function(event){
    event.preventDefault()
    console.log(`todo submitted`)

    let todoText = document.querySelector('#todo').value

    // Step 3: Add code to Step 1 to add todo to Firestore
    let docRef = await db.collection(`todos`).add({
      text:todoText
    })

    let todoId = docRef.id
    console.log(`new todo created: ${todoId}`)
//ends step 3

    if (todoText.length > 0) {
      let todoList = document.querySelector(`.todos`)
      todoList.insertAdjacentHTML(`beforeend`, `
        <div class= "todo-${todoId} py-4 text-xl border-b-2 border-purple-500 w-full">
          <a href="#" class= "done p-2 text-sm bg-green-500 text-white">✅</a>
          ${todoText}
          </div>
          `)
          let todoLink = document.querySelector(`.todo-${todoId} .done`)
          todoLink.addEventListener(`click`, async function(event){
            event.preventDefault()
            console.log(`${todoId} was clicked`)
          
            document.querySelector(`.todo-${todoId}`).classList.add(`opacity-20`)
          
            await db.collection(`todos`).doc(todoId).delete()
          })
      document.querySelector('#todo').value = ''
    }
  })

  // Step 2: Read existing to-dos from Firestore
  let querySnapshot = await db.collection('todos').get()
  console.log(`Number to todos in collection: ${querySnapshot.size}`)

  let todos = querySnapshot.docs
  for (let i=0; i<todos.length; i++) {
    let todoId = todos[i].id
    let todo = todos[i]
    console.log(todoId)
    let todoData = todo.data()
    let todoText = todoData.text
    

    let todoList = document.querySelector('.todos')
    todoList.insertAdjacentHTML('beforeend', `
      <div class="todo-${todoId} py-4 text-xl border-b-2 border-purple-500 w-full">
        <a href="#" class= "done p-2 text-sm bg-green-500 text-white">✅</a>
        ${todoText}
      </div>
    `)
let todoLink = document.querySelector(`.todo-${todoId} .done`)
todoLink.addEventListener(`click`, async function(event){
  event.preventDefault()
  console.log(`${todoId} was clicked`)

  document.querySelector(`.todo-${todoId}`).classList.add(`opacity-20`)

  await db.collection(`todos`).doc(todoId).delete()
})
  }

  // Step 4: Add code to allow completing todos



})