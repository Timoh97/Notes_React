import React from "react"
import notes from "../assets/Data"
import ListItem from "../components/Listitem";


const NotesLIstPage = () => {
    return (
        <div className="notes-list">
        {notes.map((note, index) => (<ListItem key={index}/>))}
        
        </div>
    )
}

export default NotesLIstPage;

