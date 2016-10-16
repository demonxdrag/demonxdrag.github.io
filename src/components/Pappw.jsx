import React from 'react';
import Home from './Home';
import Init from './Init';

class Papp extends React.Component {
	constructor(props){
		super(props);
		this.state = {init: true};
	}
	setStore(store){
		this.setState(store);
	}
	showThing(newState){
		let mergedState = Object.assign(this.state, newState);
		this.setState(mergedState);
	}
	render() {
		if(this.state.init){
			/*return <Init/>;*/
		}
	}
}

export default Papp;
