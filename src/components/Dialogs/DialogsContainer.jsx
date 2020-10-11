import {addMessage} from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => ({
	messagesPage: state.messagesPage
})

export default compose(
	connect(mapStateToProps, {addMessage}),
	withAuthRedirect
)(Dialogs)
