import React, { useState } from 'react';

const CommentForm = ({ user, currentProj, setNewComment, setProjects, projects }) => {
    const [body, setBody] = useState()
    const [errors, setErrors] = useState([])

    const addComment = (comment) => {
        const findProj = projects.find((item) => item.id === currentProj.id)
        const newProjComments = [...findProj.comments, comment]
        findProj.comments = newProjComments
        setProjects(projects.map(item => item.id === currentProj.id ? currentProj : item))
    }

    const handleCommentPostClick = (e) => {
        e.preventDefault()
        const data = {
            project_id: currentProj.id,
            body: body,                        
        }
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => addComment(data))
                setBody('')
                setNewComment(false)
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }

    const handleCommentChange = (e) => setBody(e.target.value)

    const onCancelClick = () => setNewComment(false)

    return (
        <div id='commentForm'>
            <form onSubmit={handleCommentPostClick} id='commentFormForm'>
                <label id='commentLabel'>Enter your new comment Here</label>
                <input id='commentInput' type='TEXT' value={body} onChange={handleCommentChange}/>
                {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)}  
                <button id='commentSubButton'>Submit</button>        
            </form>
            <button id='commentInputCancel' onClick={onCancelClick}>Cancel</button>
            </div>
    )

}

export default CommentForm