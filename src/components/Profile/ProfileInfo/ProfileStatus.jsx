import React from 'react'
import cl from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}

	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value })
	}

	activateEditMode = () => {
		this.setState({editMode: true})
	}

	deactivateEditMode = () => {
		this.setState({editMode: false})
		this.props.updateStatus(this.state.status)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div className={cl.status}>
				{!this.state.editMode &&
					<div className={cl.status_text}>
						<span onClick={() => {this.activateEditMode()}}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input
							value={this.state.status}
							onChange={this.onStatusChange}
							className={cl.input}
							onBlur={this.deactivateEditMode}
							autoFocus={true}
						/>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus
