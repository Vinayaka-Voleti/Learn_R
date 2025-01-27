import React from 'react'

const users =[
    {id: 1, name: "Vamsi", age: 25},
    {id: 2, name: "Sirish", age: 16},
    {id: 3, name: "Sanjam", age: 44},
    
];

const UserList = () => {
  return (
    <div>
        {users.map(({id, name, age}) => (
            <ul key={users.id}>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList