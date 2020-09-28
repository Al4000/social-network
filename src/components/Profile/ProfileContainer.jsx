import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setFetching, setUserProfile} from '../../redux/profileReducer'

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.setFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)
				this.props.setFetching(false)
			})
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching
	}
}

export default connect(mapStateToProps, {setUserProfile, setFetching})(ProfileContainer)