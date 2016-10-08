import React from 'react';

class Init extends React.Component {
	render() {
		return <div id="home_circle"><p>Adrian<br/>Pappalardo</p></div>;
	}
	componentDidMount(){
		let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		let circle = document.querySelectorAll('#home_circle')[0];
		circle.childNodes[0].className = "animated fadeIn";
		//setTimeout(() => this.showThing({circle:false, bar:true}), 1500);
	}
}

export default Init;
