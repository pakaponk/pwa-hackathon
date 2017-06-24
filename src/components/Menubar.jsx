import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menubar extends Component{
    render(){
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Quiz</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <NavLink to="/rooms" className="mdl-navigation__link">Find a Room</NavLink>
                    </nav>
                    { this.props.user.isAuthenticated && (
                            <nav className="mdl-navigation">
                                <a href="" className="mdl-navigation__link">{this.props.user.data.displayName}</a>
                            </nav>
                        )
                    }
                </div>
            </header>
        )
    }
}

export default Menubar