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
		let mergedState = Object.assign(this.state, newState);
		this.setState(mergedState);
	}
	componentDidMount(){
		document.querySelectorAll('#home_circle');
		setTimeout(() => this.showThing({circle:false}), 1500);
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
