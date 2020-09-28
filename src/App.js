import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from 'react-router-dom'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: pink
	}
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="wrapper">
				<Header/>
				<NavbarContainer/>
				<main className="content">
					<Route
						path="/profile"
						component={ProfileContainer}
					/>
					<Route
						exact path="/dialogs"
						component={DialogsContainer}
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
				</main>
			</div>
		</ThemeProvider>
	)
}

export default App
