import React from 'react'
import {useHistory, useParams} from 'react-router-dom'

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
	const params = useParams()
	const history = useHistory()

	const HandleBackButtonClick = () => {
		history.goBack()
	}
    
    return (
        <>
			<div className="back-button-container" onClick={HandleBackButtonClick}>
				<Button>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
					minima eius magnam culpa sequi explicabo.
				</p>
			</div>
		</>

    )
}

export default TaskDetails;