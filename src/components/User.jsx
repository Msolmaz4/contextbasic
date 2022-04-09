
import React from 'react'

const User = ({item ,changeColor}) => {
  return (
    <div style={{background:item.color}}>
        <h3>{item.name}</h3>
        <p>Email:{item.mail}</p>
        <p>Age:{item.age}</p>
        Color:''
        <input value={item.color}
        onChange={(e)=> changeColor(item.id,e.target.value)}
        ></input>



    </div>
  )
}

export default User