import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList'))
  )

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState()

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  return (
    <>
    <main>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </main>
    </>
  );
}

export default App;
