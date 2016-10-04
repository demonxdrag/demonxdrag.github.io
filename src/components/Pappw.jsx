import React from 'react';
import Bar from './Bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
		let asdf;
		if(this.state.circle){
			asdf =  <div id='home_circle'></div>;
		}

		let a = <div>
			{asdf}
			<Bar headerText='Potato1' yes={true}></Bar>
			<Bar headerText={1} yes={true}></Bar>
			<Bar headerText={3} yes={true}></Bar>
		</div>;
		let transitionCircle = <ReactCSSTransitionGroup 
          transitionName="circle" 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={300}
					
					transitionAppear={true} 
					transitionAppearTimeout={500}>
					{a}
    </ReactCSSTransitionGroup>;
		
		return transitionCircle;
	}
}

export default Papp;
