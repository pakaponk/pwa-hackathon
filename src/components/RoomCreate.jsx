import React, { Component } from 'react'
import firebase from '../firebase/firebase'

class RoomCreate extends Component{
    constructor(props){
        super(props)

        this.state = {
            room: {
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
            <div className="container">
                <div>
                    <h3>Create new Room</h3>
                </div>
                <div >
                    <form onSubmit={() => this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label">Room name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} required/>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Category</label>
                            <select name="category" className="form-control" onChange={this.handleChange} required>
                                {!this.state.room.category && <option value="?">Select Category</option>}
                                <option value="Animal">Animal</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Total Quizzes</label>
                            <input type="number" name="totalQuizzes" className="form-control" onChange={this.handleChange} min="1" required/>
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RoomCreate