import React, { Component } from 'react'

import firebase from '../firebase/firebase'

export default class RoomInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            room: {

            },
            participants: {

            }
        }
    }

    componentDidMount(){
        const roomRef = firebase.database().ref(`rooms/${this.props.match.params.id}`)

        roomRef.on('value', (snapshot) => {
            this.setState((prevState) => ({
                room: Object.assign(prevState.room, snapshot.val())
            }))
        })

        const participantsRef = firebase.database().ref(`participants/${this.props.match.params.id}`)

        participantsRef.on('value', (snapshot) => {
            const participants = snapshot.val()

            this.setState((prevState) => {
                if (participants){
                    const participants = snapshot.val()
                    const isAlreadyJoined = Object.values(participants).some((item) => {
                        return item.uid === firebase.auth().currentUser.uid
                    })
                
                    if (!isAlreadyJoined){
                        const user = firebase.auth().currentUser
                        participantsRef.push().set({
                            uid: user.uid,
                            displayName: user.displayName,
                            photoUrl: user.photoURL
                        })
                    }

                    return {
                        participants: snapshot.val()
                    }
                }
                else
                {
                    const user = firebase.auth().currentUser
                    participantsRef.push().set({
                        uid: user.uid,
                        displayName: user.displayName,
                        photoUrl: user.photoURL
                    })
                }
            })
        })
    }

    componentWillUnmount(){

    }

    render(){
        const totalParticipants = Object.values(this.state.participants).reduce((prev, curr) => {
            return prev + 1
        }, 0)

        return (
            <div style={{maxWidth: '960px', margin: 'auto'}}>
                <h3>Room: {this.state.room.name}</h3>
                <h3>Total: {totalParticipants}</h3>
            </div>
        )
    }
}