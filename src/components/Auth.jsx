import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/icon.png'

const renderLogin = (props) => {
    if (props.user.isAuthenticated)
    {
        return (
            <div>
                <h3 style={{marginBottom: '30px'}}>
                    Hi, {props.user.data.displayName}.<br/>
                    Are you ready ?
                </h3>
                <Link to="/rooms" className="btn btn-primary btn-lg">
                    Let's Play a Quiz
                </Link>
            </div>
        )
    }
    
    else
    {
        return (
            <button className="btn btn-primary text-center btn-lg" onClick={(e) => props.handleLoginWithFacebook(e)}>
                Login with Facebook
            </button>
        )
    }
}

const Auth = (props) => {
    return (
        // <div className="mdl-typography--text-center" style={{paddingTop: '160px'}}>
        <div className="text-center">
            <img className="img-circle" style={{height: '160px'}} src={logo} alt="Logo"/>
            <h1>Quiz App</h1>
            { renderLogin(props) }
        </div>
    )
}

export default Auth