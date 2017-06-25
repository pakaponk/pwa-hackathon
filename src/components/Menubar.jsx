import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menubar extends Component{
    render(){
        return (
            <header className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink to="/" className="navbar-brand">
                            <span>Quiz</span>
                        </NavLink>
                    </div>
                    <nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/rooms">Find a Room</NavLink>
                            </li>
                            { this.props.user.isAuthenticated &&
                                <li>
                                    <NavLink to="/">{this.props.user.data.displayName}</NavLink>
                                </li>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Menubar