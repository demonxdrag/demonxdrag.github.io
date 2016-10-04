import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Circle extends React.Component {
	componentDidMount(){
		setTimeout(() => this.props.setState({circle:false}), 15000);
	}
	render(){
		let circle = <div id="home_circle">Adrian<br/>Pappalardo</div>;
		return circle;
	}
}

class Init extends React.Component {
	render() {
		let transitionCircle = <ReactCSSTransitionGroup
          transitionName="circle"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}

					transitionAppear={true}
					transitionAppearTimeout={500}>
					<Circle/>
    </ReactCSSTransitionGroup>;

		return transitionCircle;
		//return <div id='home_circle' onClick={() => this.showThing()}></div>;
	}
	componentDidMount() {
		console.log('exampleComponent mounted');
	}
}

export default Init;
