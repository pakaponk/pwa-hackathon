import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDSUS9J_QAeDDNV_M8zZYGgaUH4VooIIvI",
    authDomain: "pwa-hackathon-c3123.firebaseapp.com",
    databaseURL: "https://pwa-hackathon-c3123.firebaseio.com",
    projectId: "pwa-hackathon-c3123",
    storageBucket: "pwa-hackathon-c3123.appspot.com",
    messagingSenderId: "961095142982"
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp

