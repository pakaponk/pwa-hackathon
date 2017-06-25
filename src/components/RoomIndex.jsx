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
            <div className="col-md-4 col-sm-6">
                <RoomCard key={room.host.uid} room={room}/>
            </div>
        )

        return (
            <div className="container">
                <div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <h3 style={{marginRight: 'auto'}}>Rooms</h3>
                        <Link to="/rooms/create" className="btn btn-primary">
                            Create new Room
                        </Link>
                    </div>
                    <div className="row">
                        {roomCards}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default RoomIndex