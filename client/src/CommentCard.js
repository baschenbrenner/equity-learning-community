import React, { useState, useContext } from 'react';
import {UserContext} from './context/UserContext'
const CommentCard = ({ comment, setProjects , projects, currentProj }) => {
    const [edit, setEdit] = useState(false)
    const [editInput, setEditInput] = useState(`${comment.body}`)
    const {user} = useContext(UserContext)

    const deletecomment = (comment) => {        
        const newprojcomments = currentProj.comments.filter(com => com.id !== comment.id)
        currentProj.comments = newprojcomments
        setProjects (projects.map(item => item.id === currentProj.id ? currentProj : item))
    }
    
    const editcomment = (comment) => {
        let newprojcomments = currentProj.comments.map(com => com.id === comment.id ? comment : com)
        currentProj.comments = newprojcomments
        setProjects (projects.map(item => item.id === currentProj.id ? currentProj : item))
    }

    const handleDelete = (e) => {
        e.pcomentDefault()
        fetch (`/comments/${comment.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => deletecomment(data))
    }

    const handleEdit = (e) => {
        e.pcomentDefault()
        fetch (`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                body: editInput,
            }),
        })
        .then((r) => r.json())
        .then((data) => editcomment(data))
        setEditInput(`${comment.body}`)
        setEdit(false)
    }

    const onEditClick = () => {
        edit === false ? setEdit(true) : setEdit(false)
    }

    const onCancelClick = () => {
        setEdit(false)
    }

    const onEditChange = (e) => {
        setEditInput(e.target.value)
    }

    const showEdit = () => {
        if (edit) {
            return (
                <form onSubmit={handleEdit}>
                    <input type='TEXT' value={editInput} onChange={onEditChange} />
                    <button>Submit</button>
                    <button onClick={onCancelClick}>Cancel</button>
                </form>
            )
        }
        else {
            return <p id='commentP'>{comment.body} - {comment.usernam}</p>
        }
    }
    

    

    return (
        <div id='commentDiv'>
            <p id='user'>User: {comment.username}</p>
            {showEdit()}
            {user.id === comment.user_id ? <button onClick={handleDelete}>Delete</button> : null}
            {user.id === comment.user_id ? <button onClick={onEditClick}>Edit</button> : null}
        </div>
    )
}

export default CommentCard