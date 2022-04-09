import React from 'react'
import User from './User'

const UserList =({users,changeColor})=>{
    return(
        <div>
            <h2>User list</h2>
{
    users.map((item=>
    <div>
        <User key={item.mame} item={item} changeColor={changeColor}  />
    </div>
    ))
}

        </div>
    )
}
export default UserList