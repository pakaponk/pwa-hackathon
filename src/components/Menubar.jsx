import React from 'react'
import { NavLink } from 'react-router-dom'

const Menubar = (props) => {
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
                        { props.user.isAuthenticated && 
                            <li>
                                <NavLink to="/rooms">Find a Room</NavLink>
                            </li>
                        }
                        { props.user.isAuthenticated &&
                            <li>
                                <NavLink to="/">{props.user.data.displayName}</NavLink>
                            </li>
                        }
                        { props.user.isAuthenticated &&
                            <li>
                                <a href="" onClick={props.handleLogout}>Logout</a>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menubar