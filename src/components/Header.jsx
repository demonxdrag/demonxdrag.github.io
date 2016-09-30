import React from 'react';
import Geosuggest from 'react-geosuggest';
import Social from './Social.jsx';

class Header extends React.Component {
	handleOnBlur(key, event) {
		this.props.update(key, event.target.innerText);
	}
	enterKeyPress(event) {
		if (event.key == 'Enter') {
			event.preventDefault();
			event.target.blur();
		}
	}
	onSuggestSelect(suggest) {
		if (this.props.userData.id && suggest) 
			this.props.update({current_location_string: suggest.label, current_location_lat: suggest.location.lat, current_location_lon: suggest.location.lng});
	}
	componentDidMount() {
		let aP = this.refs.addressPicker;

		if (this.props.userData.id) {
			aP.update(this.props.userData.current_location_string);
			return;
		}
		let gmaps = window.google.maps;
		let geocoder = new gmaps.Geocoder();
		geocoder.geocode({
			address: this.props.userData.current_location_string
		}, (results, status) => {
			if (status !== gmaps.GeocoderStatus.OK) {
				console.log("Error in gmaps request");
				aP.update(this.props.userData.current_location_string);
				return;
			}
			let ret = {
				current_location_string: results[0].formatted_address,
				current_location_lat: results[0].geometry.location.lat(),
				current_location_lon: results[0].geometry.location.lng()
			};
			aP.update(ret.current_location_string);
			this.props.update(ret);
		});
	}
	render() {
		let {avatar_url, name} = this.props.userData;
		
		function getDimmensions(url) {
			let img = new Image();
			img.addEventListener("load", function() {
				if (this.naturalWidth != this.naturalHeight){
					console.log('different size');
					document.querySelector('.avatar').src = 'https://graphext.com/assets/avatar_placeholder_simpler.png';
				}
			});
			img.src = url;
		}
		getDimmensions(avatar_url);
		
		return (
			<div className='header'>
				<img className="avatar" src={avatar_url}></img>
				<div className='Text'>
					<span className='alias' contentEditable={true} onBlur={(event) => this.handleOnBlur('name', event)} onKeyPress={(event) => this.enterKeyPress(event)}>{name}</span>
					<Social feeds={this.props.userData.feeds}></Social>
					<div>
						<i className="fa fa-map-marker locationIcon" aria-hidden="true"></i>
						<Geosuggest ref='addressPicker' autoActivateFirstSuggest={true} onSuggestSelect={(suggest) => this.onSuggestSelect(suggest)}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;