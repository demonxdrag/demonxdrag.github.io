import React from 'react';

class Init extends React.Component {
	render() {
		return <div id="home_circle">Adrian<br/>Pappalardo</div>;
		//return <div id='home_circle' onClick={() => this.showThing()}></div>;
	}
	componentDidMount() {
		console.log('exampleComponent mounted');
	}
}

export default Init;
