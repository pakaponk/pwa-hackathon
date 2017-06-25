import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import firebase from 'firebase'
import firebaseApp from '../firebase/firebase'
import facebookProvider from '../firebase/provider/facebook'

import Menubar from './Menubar'
import Auth from './Auth'
import Room from './Room'

class App extends Component {
	constructor(){
		super()
		this.state = {
			user: {
				isAuthenticated: false,
				data: {}
			}
		}

		this.handleLogout = this.handleLogout.bind(this)
		this.handleLoginWithFacebook = this.handleLoginWithFacebook.bind(this)
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user) => {
			if (user){
				this.setState({
					user: {
						isAuthenticated: true,
						data: user.providerData[0]
					}
				})
			}
			else
			{
				this.setState({
					user: {
						isAuthenticated: false,
						data: {}
					}
				})
			}
		})
	}

	async handleLoginWithFacebook(event){
		event.preventDefault()

		try{
			const result = await firebaseApp.auth().signInWithPopup(facebookProvider)

			this.setState({
				user: {
					isAuthenticated: true,
					data: result.user.providerData[0]
				}
			})
		}
		catch(error){
			console.error(error)
		}
	}

	async handleLogout(event){
		event.preventDefault()

		this.setState({
			user: {
				isAuthenticated: false,
				data: {}
			}
		})

		await firebase.auth().signOut()
	}

	render() {
		return (
			<Router>
				<div className="page-wrapper">
					<Menubar user={this.state.user} handleLogout={this.handleLogout}/>
					<div>
						<Switch>
							<Route exact path="/" render={(props) => (
								<Auth user={this.state.user} handleLoginWithFacebook={this.handleLoginWithFacebook} />	
							)} />
							<Route path="/rooms" component={Room}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
