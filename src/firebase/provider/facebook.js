import firebase from 'firebase'

// Setup Facebook Signin Provider  
const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.addScope('email')
provider.setCustomParameters({
	'display': 'popup'
})

export default provider