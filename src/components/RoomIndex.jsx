import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RoomCard from './RoomCard'

import firebase from '../firebase/firebase'

class RoomIndex extends Component{
    constructor(props){
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentDidMount(){
        const roomsRef = firebase.database().ref('rooms/')

        roomsRef.on('value', (snapshot) => {
            this.setState({
                rooms: Object.values(snapshot.val())
            })
        })
    }

    render(){

        const roomCards = this.state.rooms.map( room => 
            <RoomCard key={room.host.uid} room={room}/>
        )

        return (
            <div style={{maxWidth: '960px', margin: 'auto'}}>
                <div>
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}}>
                        <h3 style={{marginRight: 'auto'}}>Rooms</h3>
                        <Link to="/rooms/create" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                            <i className="material-icons">add</i>
                            <span style={{paddingLeft: '10px', paddingTop: '2px'}}>Create new Room</span>
                        </Link>
                    </div>
                    <div className="mdc-layout-grid">
                        <div className="mdc-layout-grid__inner">
                            {roomCards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default RoomIndex