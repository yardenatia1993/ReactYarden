import React, { useState } from 'react'
import { createContext } from 'react'

export const dataContext = createContext();

export default function DataContextProvider(props) {

    const [users, setUsers] = useState([
        { email: 'e@e.e', password: '1' ,notes:[]},
        { email: 'user1@example.com', password: 'password1' ,notes:[]},
        { email: 'user2@example.com', password: 'password2' ,notes:[]},
        { email: 'user3@example.com', password: 'password3' ,notes:[]},
      ]);
      localStorage.setItem("users",JSON.stringify(users))
      const [id, setid] = useState(0)
      
      const [notes, setNotes] = useState([]);


      const AddNote = (title,description) => {
        let data = localStorage.getItem("users")
        console.log(data);
        setid((prev)=>prev+1)
        let newNotes=[...notes, {id, title, description }]
        console.log(newNotes);
        setNotes(newNotes);
      }

      const removeNote=(index)=>{
        let remove = users.filter(x=>x!==index)
        setNotes(remove)
      }
      
      const addUser = (email, password) => {
        setUsers([...users, {email, password ,notes:[]}]);
      }

    
      const getUser = (email, password) => {
        return users.find(u => u.email === email && u.password === password);
      }
    
    
      const checkUserExist = (email) => {
        return users.find(u => u.email === email);
      }


    return (
        <dataContext.Provider value={{
             users,
             addUser, 
             getUser, 
             checkUserExist,
             AddNote,
             id,
             notes,
             removeNote
        }}>
            {props.children}

        </dataContext.Provider>
    )
}
