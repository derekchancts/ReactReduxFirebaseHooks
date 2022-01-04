import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { store } from "./store";
import Todos from "./Todos";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

const rrfProps = {
	firebase,
	config: {
		userProfile: "users"
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

const App = () => (
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<div style={styles}>
				<h2>Create a Todo by adding the fields {"\u2728"}</h2>
				<Todos />
			</div>
		</ReactReduxFirebaseProvider>
	</Provider>
);

render(<App />, document.getElementById("root"));
