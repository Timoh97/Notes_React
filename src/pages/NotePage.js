import React from "react"

const NotePage = ({match}) => { 
    let nodeId = match.params.id

    let note = notes.find (note => note.id === Number(noteId))
    return (
        <div>
        <p>{note.body}</p>
        </div>
    )
}

export default NotePage;