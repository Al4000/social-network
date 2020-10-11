import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import {compose} from 'redux'
import {getFriends} from '../../redux/sidebarReducer'

class NavbarContainer extends React.Component {

	componentDidMount() {
		this.props.getFriends()
	}

	render() {
		return (
			<Navbar sidebar={this.props.sidebar} />
		)
	}
}

let mapStateToProps = (state) => ({
	sidebar: state.sidebar
})

export default compose(
	connect(mapStateToProps, {getFriends})
)(NavbarContainer)
