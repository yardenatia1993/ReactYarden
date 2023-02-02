import React from 'react'
import { useContext } from 'react'
import { dataContext } from './DataContextProvider'

export default function Note(props) {

    const {removeNote} = useContext(dataContext)
    return (
        <div style={{
            border: "2px solid black",
            color: "red",
            width: "50vh"
        }}>
            <h2>Note:</h2>
            <ul>
                <li>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <button onClick={()=>removeNote()}>x</button>
                    <button>edit</button>
                </li>
            </ul>
          
        </div>
    )
}
