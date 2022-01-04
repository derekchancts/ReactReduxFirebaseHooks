import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCein-0VPlKH215ZuxdXmLtnXENQ4A3YLA",
	authDomain: "test-project-e5b59.firebaseapp.com",
	databaseURL: "https://test-project-e5b59.firebaseio.com",
	projectId: "test-project-e5b59",
	storageBucket: "test-project-e5b59.appspot.com",
	messagingSenderId: "1064030689053",
	appId: "1:1064030689053:web:8f795472755314e1"
};

// Initialize Firebase
try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;
