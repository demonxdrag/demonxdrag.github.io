import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Init extends React.Component {
	render() {
		let circle = <div id="home_circle">Adrian<br/>Pappalardo</div>;
		let transitionCircle = <ReactCSSTransitionGroup
          transitionName="circle"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}

					transitionAppear={true}
					transitionAppearTimeout={500}>
					{circle}
    </ReactCSSTransitionGroup>;

		return transitionCircle;
		//return <div id='home_circle' onClick={() => this.showThing()}></div>;
	}
	componentDidMount() {
		console.log('exampleComponent mounted');
	}
}

export default Init;
