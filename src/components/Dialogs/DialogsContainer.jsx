import {addMessage, messageInput} from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}

const DialogsContainer = connect(mapStateToProps, {addMessage, messageInput})(Dialogs)

export default DialogsContainer
