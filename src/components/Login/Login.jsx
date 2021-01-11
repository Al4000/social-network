import React from 'react'
import Button from '@material-ui/core/Button'
import cl from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.remember, formData.captcha)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}

const validate = values => {
	const errors = {}
	const requiredFields = [
		'email',
		'password'
	]
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required'
		}
	})
	return errors
}

const renderTextField = ({
		label,
		input,
		meta: {touched, invalid, error},
		...custom
	}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		variant="outlined"
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
				/>
			}
			label={label}
		/>
	</div>
)

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={cl.input_field}>
				<Field name={'email'} label={'Login'} component={renderTextField} />
			</div>
			<div className={cl.input_field}>
				<Field name={'password'} label={'Password'} component={renderTextField} type={'password'} />
			</div>
			<div className={cl.input_field}>
				<Field name={'remember'} label={'Remember me'} component={renderCheckbox} type={'checkbox'} />
			</div>

			{	props.submitFailed &&
				<div className={`${cl.summary_error} ${cl.input_field}`}>
					{props.error}
				</div> }
			{props.captchaUrl && <div><img src={props.captchaUrl} alt="" /></div>}
			{props.captchaUrl && <div className={cl.input_captcha}><Field name={'captcha'} label={'Enter a symbols'} component={renderTextField} /></div>
			}

			<div className={cl.input_field}>
				<Button
					variant="contained"
					color="primary"
					className={cl.button}
					type={'submit'}
					startIcon={<SupervisorAccountIcon/>}
					// disabled={validate.errors}
				>
					Login
				</Button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login',
	validate
})(LoginForm)

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
