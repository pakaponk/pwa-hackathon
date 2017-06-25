import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RoomCreate from './RoomCreate'
import RoomIndex from './RoomIndex'

const Room = (props) => {
	return (
		<Switch>
			<Route path="/rooms/create" component={RoomCreate}></Route>
			<Route path="/rooms" component={RoomIndex}></Route>
		</Switch>
	)
}

export default Room