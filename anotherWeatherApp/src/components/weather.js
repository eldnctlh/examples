import React from 'react';
import styles from '../style.css';

class Weather extends React.Component {
	render() {
		return (
			<div className={styles.weather}>
				<h2>Weather display:</h2>
				{
					typeof(this.props.temp) == 'number' ? (
						<div className={styles.weather_list}>
							<h4>{this.props.name}</h4>
							<p><span>Temperature:</span> {this.props.temp} C</p>
							<p><span>Max temperature:</span> {this.props.temp_max} C</p>
							<p><span>Min temperature:</span> {this.props.temp_min} C</p>
							<p><span>Humidity:</span> {this.props.humidity} %</p>
							<p><span>Wind speed:</span> {this.props.windSpeed} m/s</p>
							<p><span>Pressure:</span>{this.props.pressure} mm</p>
							<div className={styles.weather_flex}>
								<p>{this.props.desc}</p>
								<img src={this.props.icon} />
							</div>
						</div>
				) : (
					null
				)
				}
			</div>
		)
	}
}
export default Weather;