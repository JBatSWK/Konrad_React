import React from 'react'

import config from "../../config.json"

import './App.css'
import './React_Template/src/styles/App.css'

import Main from './React_Template/src/components/Main/Main';

function App() {
	const name = "Konrad";
	const icon = require("./Bicycle.png");
	config.port = config.konrad.port
	config.port_react = config.konrad.port_react

	return (

		<Main name={name} icon={icon} config={config}></Main>

	);
}

export default App;
