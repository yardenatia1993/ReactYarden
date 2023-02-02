import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from './DataContextProvider';

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {AddNote} = useContext(dataContext)

  
  
  // const handleAddNote = () => {
  //   setid((prev)=>++prev)
  //   console.log(id);
  //   console.log("updated");
  //   setNotes([...notes, { title, description,id }]);
  //   setTitle('');
  //   setDescription('');
  // }
  return (
    <div style={{
      height:"50vh",
      display:"grid",
      placeItems:"center"
    }}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <button onClick={()=>AddNote(title,description)}>Add</button>
      <Link to="/notes">Go to Notes</Link>
      
    </div>
  );
}

export default Home;
