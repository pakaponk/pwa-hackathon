import React, { Component } from 'react'
import firebase from '../firebase/firebase'

import InputField from './InputField'


class RoomCreate extends Component{
    constructor(props){
        super(props)

        this.state = {
            room: {
                name: ""
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            room: Object.assign(this.state.room, {
                [event.target.name]: event.target.value
            })
        })
    }

    async handleSubmit(event){
        event.preventDefault()

        const user = firebase.auth().currentUser

        try{
            if (this.isInputValidate())
            {
                await firebase.database().ref('rooms/' + user.uid).set({
                    host: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoUrl: user.photoURL
                    },
                    name: this.state.room.name,
                    category: this.state.room.category,
                    totalQuizzes: this.state.room.totalQuizzes,
                })

                this.props.history.push(`/rooms/${user.uid}`)
            }
            else
            {
                alert("Form Validation Failed")
            }

        }
        catch(error){
            console.error(error)
        }
    }

    isInputValidate(){
        if (this.state.name && this.state.category && this.state.totalQuizzes > 0)
            return true
        else
            return false
    }

    render(){

        return (
            <div style={{ maxWidth: '960px', margin: 'auto'}}>
                <div>
                    <div>
                        <h3>Create new Room</h3>
                    </div>
                    <div >
                        <form onSubmit={() => this.handleSubmit}>
                            <div>
                                <InputField name="name" label="Room name" handleChange={this.handleChange} required={true} />
                            </div>

                            <div>
                                <InputField name="category" label="Pick a Category" handleChange={this.handleChange} required={true} />
                            </div>

                            <div>
                                <InputField type="number" name="totalQuizzes" label="Total Quizzes" handleChange={this.handleChange} required={true} />
                            </div>

                            <div style={{marginTop: '20px'}}>
                                <button className="mdc-button mdc-button--raised mdl-button--colored" onClick={(e) => this.handleSubmit(e)}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomCreate