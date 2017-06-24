import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import firebase from 'firebase'
import firebaseApp from '../firebase/firebase'
import facebookProvider from '../firebase/provider/facebook'

import Menubar from './Menubar'
import Auth from './Auth'

class App extends Component {
	constructor(){
		super()
		this.state = {
			user: {
				isAuthenticated: false,
				data: {}
			}
		}
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

	render() {
		return (
			<Router>
				<div className="mdl-layout mdl-js-layout mdl-layout mdl-layout--fixed-header">
					<Menubar user={this.state.user}/>
					<div className="mdl-layout__drawer">
						<span className="mdl-layout-title">Quiz</span>
						<nav className="mdl-navigation">
							<a href="" className="mdl-navigation__link">Link</a>
							<a href="" className="mdl-navigation__link">Link</a>
							<a href="" className="mdl-navigation__link">Link</a>
							<a href="" className="mdl-navigation__link">Link</a>
						</nav>
					</div>
					<main className="mdl-layout__content">
						<div className="page-content">
							<Route exact path="/" render={(props) => (
								<Auth user={this.state.user} handleLoginWithFacebook={this.handleLoginWithFacebook} />	
							)} />
						</div>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
