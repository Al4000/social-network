import {addMessageActionCreator, messageInputActionCreator} from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		messageInput: (text) => {
			dispatch(messageInputActionCreator(text))
		},
		addMessage: () => {
			dispatch(addMessageActionCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
