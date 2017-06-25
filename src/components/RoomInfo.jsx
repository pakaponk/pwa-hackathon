import React, { Component } from 'react'

import UserCard from './UserCard'

import firebase from '../firebase/firebase'

export default class RoomInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            room: {

            },
            participants: {

            },
            participantId: null
        }
        
    }

    componentDidMount(){
        this.roomRef = firebase.database().ref(`rooms/${this.props.match.params.id}`)

        this.roomRef.on('value', (snapshot) => {
            this.setState((prevState) => ({
                room: Object.assign(prevState.room, snapshot.val())
            }))
        })

        this.participantsRef = firebase.database().ref(`participants/${this.props.match.params.id}`)

        this.participantsRef.on('value', (snapshot) => {
            const participants = snapshot.val()
            console.log("Participants Changed", participants)

            if (participants){
                this.setState({
                    participants
                })
                
                const isAlreadyJoined = Object.values(participants).some((item) => {
                    return item.uid === firebase.auth().currentUser.uid
                })
            
                const user = firebase.auth().currentUser
                if (!isAlreadyJoined){
                    console.log("Registering yourself")

                    this.participantsRef.push().set({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoUrl: user.photoURL
                    })
                }
                else
                {
                    console.log("Assigning new Participants")

                    const [key, ] =  Object.entries(participants).find(([key, value]) => {
                        return value.uid === user.uid
                    })

                    this.setState({
                        participantId: key,
                    })
                }
            }
            else
            {
                const user = firebase.auth().currentUser
                this.participantsRef.push().set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                })
            }
        })
    }

    componentWillUnmount(){
        this.participantsRef.off("value")
        this.roomRef.off("value")

        this.participantRef = firebase.database().ref(`participants/${this.props.match.params.id}/${this.state.participantId}`).remove()
    }

    render(){
        const participants = Object.values(this.state.participants)
        const totalParticipants = participants.length

        const userCards = participants.map(participant => (
            <div key={participant.uid} className="col-sm-3 col-xs-6">
                <UserCard user={participant} />
            </div>
        ))

        return (
            <div className="container">
                <h3>Room: {this.state.room.name}</h3>
                <div style={{marginTop: '30px'}}>
                    <h4>Total Players: {totalParticipants}</h4>
                    <h4>Players List: </h4>
                    <div className="row" style={{marginTop: '20px'}}>
                        {userCards}
                    </div>
                </div>
            </div>
        )
    }
}