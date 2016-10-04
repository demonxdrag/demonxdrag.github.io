import React from 'react';
import Bar from './Bar';
import Init from './Init';

class Papp extends React.Component {
	constructor(props){
		super(props);
		this.state = {showWorkWindow: false, circle: true, bar: false};
	}
	setStore(store){
		this.setState(store);
	}
	showThing(newState){
		let state = Object.assign(this.state, newState);
		this.setState(state);
	}
	render() {
		if(this.state.circle){
			return <Init></Init>;
		}

		if(this.state.bar){
			return	<Bar></Bar>;
		}
	}
}

export default Papp;
