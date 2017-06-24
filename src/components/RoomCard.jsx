import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.css'

const RoomCard = (props) => {
    return (
        <div className="mdl-cell mdl-cell--4-col room-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">{props.title}</h2>
            </div>
            <div className="mdl-card__supporting-text">{props.description}</div>
            <div className="mdl-card__actions mdl-card--border">
                <Link to="/rooms/1" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Join
                </Link>
            </div>
        </div>
    )
}

export default RoomCard