import React from 'react';
import { useContext } from 'react';
import { dataContext } from './DataContextProvider';
import Note from './Note';


function NotesPage() {
  const {notes} = useContext(dataContext)
  console.log(notes);

  let notesToDisplay=notes.for(note=><Note key={note.id} title={note.title} description={note.description}/>)
  
  return (
    <div>
      {notesToDisplay}
    </div>
  );
}

export default NotesPage;
