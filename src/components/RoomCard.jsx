import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.css'

const RoomCard = (props) => {
    // return (
    //     <div className="mdl-cell mdl-cell--4-col room-card mdl-card mdl-shadow--2dp">
    //         <div className="mdl-card__title mdl-card--expand">
    //             <h2 className="mdl-card__title-text">{props.title}</h2>
    //         </div>
    //         <div className="mdl-card__supporting-text">{props.description}</div>
    //         <div className="mdl-card__actions mdl-card--border">
    //             <Link to="/rooms/1" className="mdc-button" data-mdc-auto-init={MDCRipple}>
    //                 Join
    //             </Link>
    //         </div>
    //     </div>
    // )

    return (
        <div className="room-card mdc-layout-grid__cell mdc-card">
            <section className="mdc-card__media">
                <h1 className="mdc-card__title mdc-card__title--large">{props.room.name}</h1>
                <h2 className="mdc-card__subtitle">{`Hosted by ${props.room.host.displayName}`}</h2>
            </section>
            <section className="mdl-card__actions">
                <Link to={`/rooms/${props.room.host.uid}`} className="mdc-button mdc-button--compact mdc-card__action">Join</Link>
            </section>
        </div>
    )
}

export default RoomCard