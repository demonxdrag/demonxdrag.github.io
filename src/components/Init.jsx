import React from 'react';

class Init extends React.Component {
	render() {
		let projectName = [
			"Photorealistic_Drum",
			"Tesla_Model_S",
			"Ford_GT_2017",
			"Piano_Concept",
			"Black_Sabr_Branding",
			"VolksWagen_Scirocco",
			"VolksWagen_Beetle",
			"Seat_Ibiza_Contest_Prototype",
			"Logo_Showreel",
			"Blitzkrieg_Breakfast_Steam_Profiles",
			"Videogame_Assets"
		];

		let img;
		return <div>{projectName.map(proj =>
			<div className="card" key={proj}>
					<div className="card-image">
						<img src={"img/" + decodeURIComponent(proj) + "/Cover.jpg"} alt={proj}/>
						<span className="card-title">{proj}</span>
					</div>
				</div>
		)}</div>;

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
