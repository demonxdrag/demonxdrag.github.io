import React from 'react';
import Home from './Home';
import Init from './Init';

class Papp extends React.Component {
	constructor(props){
		super(props);
		this.state = {circle: true, bar: false};
	}
	setStore(store){
		this.setState(store);
	}
	showThing(newState){
		let mergedState = Object.assign(this.state, newState);
		this.setState(mergedState);
	}
	render() {
		if(this.state.circle){
			return <Init/>;
		}

		if(this.state.bar){
			return	<Bar/>;
		}
	}
}

export default Papp;
