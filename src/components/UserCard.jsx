import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
    return (
        <div className="user-card">
            <img src={props.user.photoUrl} alt="Avatar" className="img-circle center-block"/>
            <h4 className="text-center">{props.user.displayName}</h4>
        </div>
    )
}

export default UserCard