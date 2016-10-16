import React from 'react';

class Init extends React.Component {
	render() {
		let projectName = [
			"Photorealistic Drum",
			"Tesla Model S",
			"Ford GT 2017",
			"Piano Concept",
			"Black Sabr Branding",
			"VolksWagen Scirocco",
			"VolksWagen Beetle",
			"Seat Ibiza Contest Prototype",
			"Logo Showreel",
			"Blitzkrieg Breakfast Steam Profiles",
			"Videogame Assets"
		];

		let final = {};
		for (i = 0; i < projectName.length; i++) {
			let img = "img/" + {projectName[i]} + "/Cover.jpg";
			final += (
				<div class="card">
		      <div class="card-image">
		        <img src={img} alt=projectName[i]>
		        <span class="card-title">{projectName[i]}</span>
		      </div>
		    </div>
			);
		};
		return final;
	}
	componentDidMount(){
		/*
		let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		let circle = document.querySelectorAll('#home_circle')[0];
		circle.childNodes[0].className = "animated fadeIn";
		*/
	}
}

export default Init;
