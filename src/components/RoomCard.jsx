import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.css'

const RoomCard = (props) => {
    return (
        <div className="room-card">
            <section className="room-card__media">
                <h1 className="room-card__title">{props.room.name}</h1>
                <h2 className="room-card__subtitle">{`Hosted by ${props.room.host.displayName}`}</h2>
            </section>
            <section className="room-card__actions">
                <Link to={`/rooms/${props.room.host.uid}`} className="btn btn-link">Join</Link>
            </section>
        </div>
    )
}

export default RoomCard