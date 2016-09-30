import React from 'react';
import Bar from './Bar';

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
		let asdf;
		if(this.state.circle){
			asdf =  <div id='home_circle' onClick={() => this.showThing()}></div>;
		}

		let a = <div>
			{asdf}
			<Bar headerText='Potato1' yes={true}></Bar>;
			<Bar headerText={1} yes={true}></Bar>;
			<Bar headerText={3} yes={true}></Bar>;
		</div>;
		return a;
	}
}

export default Papp;
