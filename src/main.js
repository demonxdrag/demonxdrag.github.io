import React from 'react';
import ReactDOM from 'react-dom';
import Papp from './components/Pappw.jsx';

function panel(){
	ReactDOM.render(
		<Papp/>,
		document.getElementById('container')
	);
}

document.addEventListener('DOMContentLoaded', panel());
