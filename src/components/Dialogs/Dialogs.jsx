import React from 'react'
import cl from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import Button from '@material-ui/core/Button'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'

const Dialogs = (props) => {
	let state = props.messagesPage
	let dialogElements = state.dialogs.map((dialog) => {
		return (
			<Dialog
				name={dialog.name}
				id={dialog.id}
				avatar={dialog.avatar}
				key={dialog.id}
			/>
		)
	})
	let messagesElements = state.messages.map((msg) => {
		return (
			<Message
				message={msg.message}
				type={msg.type}
				key={msg.id}
			/>
		)
	})
	let addNewMessage = (values) => {
		props.addMessage(values.newMessageText)
	}

	if (!props.isAuth) {
		return <Redirect to={'/login'}/>
	}

	return (
		<div>
			<div className={cl.dialogs}>
				<div className={cl.dialogs_items}>
					{dialogElements}
				</div>
				<div className={cl.messages}>
					{messagesElements}
				</div>
			</div>
			<SendReduxForm onSubmit={addNewMessage}/>
		</div>
	)
}

const renderTextField =
	({
		 label,
		 input,
		 ...custom
	 }) => (
		<TextField
			id="outlined-multiline-flexible"
			label={label}
			placeholder={label}
			variant="outlined"
			className={cl.input_message}
			{...input}
			{...custom}
		/>
	)

const SendForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={cl.input_fields}>
				<Field
					rows="3"
					component={renderTextField}
					name={'newMessageText'}
					label={'Enter a message..'}
				/>
				<Button
					variant="contained"
					color="primary"
					type={'submit'}
					endIcon={<Icon>send</Icon>}
					disabled={props.pristine}
				>
					Send
				</Button>
			</div>
		</form>
	)
}

const SendReduxForm = reduxForm({
	form: 'messageSend'
})(SendForm)

export default Dialogs
