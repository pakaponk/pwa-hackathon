import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RoomCreate from './RoomCreate'
import RoomIndex from './RoomIndex'
import RoomInfo from './RoomInfo'

const Room = (props) => {
	return (
		<Switch>
			<Route path="/rooms/create" component={RoomCreate} />
			<Route path="/rooms/:id" component={RoomInfo} />
			<Route exact path="/rooms" component={RoomIndex} />
		</Switch>
	)
}

export default Room