import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {compose} from 'redux'

const HeaderContainer = (props) => {
	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default compose(
	connect(mapStateToProps, {logout})
)(HeaderContainer)

