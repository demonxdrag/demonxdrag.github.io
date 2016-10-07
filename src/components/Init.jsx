import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Init extends React.Component {
	render() {
		let circle = <div id="home_circle" key="one">Adrian<br/>Pappalardo</div>;
		let params = {
			transitionName: "circle",
			transitionEnter: true,
			transitionEnterTimeout: 500,
			transitionLeave: true,
			transitionLeaveTimeout: 300,
			transitionAppear: false,
			transitionAppearTimeout: 300
		};
		return (<ReactCSSTransitionGroup {...params}>
			{circle}
			</ReactCSSTransitionGroup>);
		//return <div id='home_circle' onClick={() => this.showThing()}></div>;
	}
	componentDidMount(){
		/*
		console.log(<ReactCSSTransitionGroup {...this.params}>
			{this.circle}
			</ReactCSSTransitionGroup>);
		/*
		document.querySelectorAll('#home_circle');
		setTimeout(() => this.showThing({circle:false, bar:true}), 1500);
		*/
	}
}

export default Init;
