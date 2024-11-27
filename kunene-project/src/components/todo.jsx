import React from 'react'
import "./todo.css"

function todo () {
  return (
<div className='todo'>
<h2>
    my todo
</h2>
<div className="todos-btn">
    <button className='edit-btn'>edit</button>
    <button className='delete-btn'>delete</button>
</div>
</div>
  )
}

export default todo