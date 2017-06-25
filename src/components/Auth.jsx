import React from 'react'
import { Link } from 'react-router-dom'

const renderLogin = (props) => {
    if (props.user.isAuthenticated)
    {
        return (
            <div style={{'fontFamily':'Oswald'}}>
                <h3>Hello !!!  {props.user.data.displayName}. Are you ready ?</h3>
                <button style={{'border':'none','margin-top':'20px','padding':'10px'}}>
                    <Link to="/rooms" className="button" style={{fontFamily:'Oswald','text-decoration':'none','font-size':'20'}}>
                        Let's Play a Quiz
                    </Link>
                </button>
            </div>
        )
    }
    
    else
    {
        return (
            <button style={{fontFamily:'Oswald'}} class="text-center" onClick={(e) => props.handleLoginWithFacebook(e)}>
                Login with Facebook
            </button>
        )
    }
}

const Auth = (props) => {
    return (
        // <div className="mdl-typography--text-center" style={{paddingTop: '160px'}}>
        <div className="text-center" style={{paddingTop: '200px'}}>
            <h1> Quiz App</h1>
            <div style={{paddingTop:'10px'}}>
                { renderLogin(props) }
            </div>
        </div>
    )
}

export default Auth