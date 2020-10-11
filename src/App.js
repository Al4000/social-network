import React, {Suspense} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import './App.css'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import {compose} from 'redux'
import {connect, Provider} from 'react-redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: pink
	}
})

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<ThemeProvider theme={theme}>
				<div className="wrapper">
					<HeaderContainer/>
					<NavbarContainer/>
					<main className="content">
						<Route
							path="/profile/:userId?"
							render={ () => {
								return (
									<Suspense fallback={<Preloader />}>
										<ProfileContainer />
									</Suspense>
								)
							}}
						/>
						<Route
							exact path="/dialogs"
							render={ () => {
								return (
									<Suspense fallback={<Preloader />}>
										<DialogsContainer />
									</Suspense>
								)
							}}
						/>
						<Route
							path="/news"
							component={News}
						/>
						<Route
							path="/music"
							component={Music}
						/>
						<Route
							path="/settings"
							component={Settings}
						/>
						<Route
							path="/users"
							component={UsersContainer}
						/>
						<Route
							path='/login'
							component={Login}
						/>
					</main>
				</div>
			</ThemeProvider>
		)
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App)

const SocialNetworkApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default SocialNetworkApp
