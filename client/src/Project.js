import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';

const Project = ({ projects, user, setProjects }) => {
    const { id } = useParams()
    const [newComment, setNewComment] = useState(false)

    const onAddButtonClick = () => {
        setNewComment(true)
    }

    const currentProj = projects.find((item) => item.id == id)

    const currentComments = currentProj ? 
            currentProj.comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} setProjects={setProjects} projects={projects} currentProj={currentProj} />       
        }) : null

    if (!currentProj) return <h2>Loading</h2>

    return(
        <div id='proj'>
            <h1>{currentProj.title}</h1>
            <p>{currentProj.description}</p>
            <h2>{currentProj.main_goal}</h2>
            <p>{currentProj.secondary_goal}</p>

            {newComment === false ? 
            <button onClick={onAddButtonClick}>Click to add a new comment</button> :
             <CommentForm currentProj={currentProj} setNewComment={setNewComment} projects={projects} setProjects={setProjects} />}

            {currentComments}
        </div>
    )

}

export default Project