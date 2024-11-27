import React from 'react'
import "./to-form.css"

function ToDoForm () {
    const [value,setInput ]=useState("")
    const handleSubmit=(e)=>(
e.preventDefault()
Console.log(value)
    )
  return (
    <form className='todoform' onSubmit={handleSubmit}>
    <input type="text" 
    placeholder='what is your to do?'
    value={value}
    onChange={(e)=>setInput(e.target.value)}/>

    <button>
        Add Task
    </button>
    </form>
  )
}

export default ToDoForm