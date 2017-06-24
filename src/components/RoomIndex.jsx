import React from 'react'
import RoomCard from './RoomCard'

const generateRoomCard = function*(total){
	for (let i = 0;i < total;i++){
		const room = {
			title: `Room ${i+1}`,
			description: `Hosted by John Doe`
		}

		yield (
			<RoomCard title={room.title} description={room.description}/>        
		)
	}
}

const RoomIndex = (props) => {
	const rooms = [...generateRoomCard(3)]

	return (
		<div className="mdl-grid" style={{maxWidth: '960px'}}>
			<div className="mdl-layout__content">
				<div style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}}>
					<h3 style={{marginRight: 'auto'}}>Rooms</h3>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
						<i className="material-icons">add</i>
						<span style={{paddingLeft: '10px', paddingTop: '2px'}}>Create new Room</span>
					</button>
				</div>
				<div className="mdl-grid">
					{rooms}
				</div>
			</div>
		</div>
	)
}

export default RoomIndex