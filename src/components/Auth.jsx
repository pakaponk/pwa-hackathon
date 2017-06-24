import React from 'react'
import { Link } from 'react-router-dom'

const renderLogin = (props) => {
    if (props.user.isAuthenticated)
    {
        return (
            <div>
                <h3>Hello, {props.user.data.displayName}</h3>
                <Link to="/rooms" className="mdl-button mdl-js-button mdl-button--raised">
                    Let's Play a Quiz
                </Link>
            </div>
        )
    }
    else
    {
        return (
            <button className="mdl-button mdl-js-button mdl-button--raised" onClick={(e) => props.handleLoginWithFacebook(e)}>
                Login with Facebook
            </button>
        )
    }
}

const Auth = (props) => {
    return (
        <div className="mdl-typography--text-center" style={{paddingTop: '160px'}}>
            <h1>Quiz app</h1>
            { renderLogin(props) }
        </div>
    )
}

export default Auth