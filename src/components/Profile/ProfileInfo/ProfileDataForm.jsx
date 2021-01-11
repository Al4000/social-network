import React from 'react'
import Button from '@material-ui/core/Button'
import cl from './ProfileInfo.module.css'
import {Save} from '@material-ui/icons'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const ProfileDataForm = (props) => {

	const renderTextField = ({
		label,
		input,
    meta: { touched, invalid, error },
    ...custom
	}) => (
		<TextField
			label={label}
			placeholder={label}
			variant="outlined"
			color="primary"
			className={cl.textfield}
			error={touched && invalid}
			helperText={touched && error}
			{...input}
			{...custom}
		/>
	)

	const renderCheckbox = ({ input, label }) => (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={!!input.value}
						onChange={input.onChange}
						color={'primary'}
						className={cl.checkbox}
					/>
				}
				label={label}
			/>
		</div>
	)

	return (
		<form className={cl.profile_form} onSubmit={props.handleSubmit}>
			{<Button
				size="small"
				variant="contained"
				color="default"
				className={cl.button_save}
				endIcon={<Save/>}
				type={'submit'}
			>
				Save
			</Button>}
			{	props.submitFailed &&
			<div className={cl.summary_error}>
				{props.error}
			</div> }
			<div className={cl.content__edit_field}>
				<b>Full Name:</b>
				<Field name={'fullName'} component={renderTextField} />
			</div>
			<div className={cl.content__edit_field}>
				<b>Looking for a Job:</b>
				<Field name={'lookingForAJob'} component={renderCheckbox} type={'checkbox'} />
			</div>
			<div className={cl.content__edit_field}>
				<b>Job Description:</b>
				<Field name={'lookingForAJobDescription'} component={renderTextField} />
			</div>
			<div className={cl.content__edit_field}>
				<b>About:</b>
				<Field name={'aboutMe'} component={renderTextField} />
			</div>
			<div className={cl.content__edit_field}>
				<b>Facebook:</b>
				<Field name={'contacts.facebook'} component={renderTextField} />
			</div>
			<div className={cl.content__edit_field}>
				<b>Instagram:</b>
				<Field name={'contacts.instagram'} component={renderTextField} />
			</div>
			<div className={cl.content__edit_field}>
				<b>Website:</b>
				<Field name={'contacts.website'} component={renderTextField} />
			</div>
		</form>
	)
}

const ProfileReduxForm = reduxForm({
	form: 'profile'
})(ProfileDataForm)

export default ProfileReduxForm
