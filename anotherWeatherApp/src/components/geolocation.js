import React from 'react';
import styles from '../style.css';

class Geolocation extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: undefined,
            long: undefined,
        }
        this.getGeolocation = this.getGeolocation.bind(this);
    }
    getGeolocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {	
                this.props.getWeather( false, false, {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            },
            function(error){
                console.log(error)
            }, {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 0
              }
        )
    }
    componentWillMount() {
        this.getGeolocation()
    }
	render() {
		return (
            <div className={`${styles.geo} ${styles.block}`}>
                <h2>Show weather by your geolocation</h2>
                <button onClick={this.getGeolocation}>Show weather</button>
            </div>
		)
	}
}

export default Geolocation;