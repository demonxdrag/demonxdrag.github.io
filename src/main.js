import React from 'react';
import ReactDOM from 'react-dom';
import Extension from './components/Extension.jsx';

function panel(){
	ReactDOM.render(
		<Extension/>,
		document.getElementById('container')
	);
}

document.addEventListener('DOMContentLoaded', panel());
