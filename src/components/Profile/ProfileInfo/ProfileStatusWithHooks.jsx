import React, {useEffect, useState} from 'react'
import cl from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={cl.status}>
			{!editMode &&
				<div className={cl.status_text}>
					<span onClick={activateEditMode}>{props.status || 'Set status'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input
						className={cl.input}
						autoFocus={true}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
						value={status}
					/>
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks
