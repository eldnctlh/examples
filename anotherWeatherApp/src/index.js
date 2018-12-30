import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form';
import Weather from './components/weather';
import styles from './style.css';
import Geolocation from './components/geolocation';
import List from './components/list';

// const API_KEY = 'a4c005786d5b1cdf2c84cdbb2c1fc38f'

const API_KEY = 'f890831b7e61f189f0ae9af5d0c7529b'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			cityList: localStorage.cityList ? (
				JSON.parse(localStorage.getItem("cityList"))
			) : (
				[
					{
						cityName: 'Odessa',
						country: 'UA',
						id: Math.random() * (9999 - 0) + 0
					},
					{
						cityName: 'Kiev',
						country: 'UA',
						id: Math.random() * (9999 - 0) + 0
					},
					{
						cityName: 'Lviv',
						country: 'UA',
						id: Math.random() * (9999 - 0) + 0
					},
					{
						cityName: 'Text',
						country: 'qw',
						id: Math.random() * (9999 - 0) + 0
					},
					{
						cityName: 'Paris',
						country: 'FR',
						id: Math.random() * (99999 - 0) + 0
					},
				]
			),
			name: undefined,
			city: '',
			country: '',
			humidity: undefined,
			temp: undefined,
			windSpeed: undefined,
			desc: undefined,
			icon: undefined,
			pressure: undefined,
			temp_min: undefined,
			temp_max: undefined,
			isFetch: undefined,
		}
		this.getWeather = this.getWeather.bind(this);
		this.updateData = this.updateData.bind(this);
		this.deleteCity = this.deleteCity.bind(this);
	}

	deleteCity(id) {
		this.setState({
			cityList: this.state.cityList.filter(item => item.id !== id)
		});
	}
	updateData(cityName, country) {
		this.setState({
			cityList: this.state.cityList.concat({
				cityName: cityName,
				country: country,
				id: Date.now(),
			}),
			city: cityName,
			country: country
		})
		this.getWeather(cityName, country)
	}
	componentWillUpdate(nextProps, nextState){
		(nextState.cityList !== this.state.cityList) ? (
			localStorage.setItem("cityList", JSON.stringify(nextState.cityList))
		) : (
			null
		)
	}
	getWeather(city, country, geo) {
		let call;
		city && country ? (
			call = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		) : (	
			geo ? (
				call = `http://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.long}&units=metric&APPID=${API_KEY}`		
	
			) : (
				call = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`
			)
		)	
		fetch(call)
		.then(response => response.json())
		.then(data =>{
			this.setState({ 
				name: data.name,
				temp: data.main.temp,
				temp_min: data.main.temp_min,
				temp_max: data.main.temp_max,
				humidity: data.main.humidity,
				windSpeed: data.wind.speed,
				desc: data.weather[0].description,
				icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
				pressure: data.main.pressure,
			})
			this.setState({
				isFetch: undefined,
			})
		}).catch((error) => {
			this.setState({
				isFetch: city,
			})
		})				
	}

	render(){
		return (
			<div className={styles.app}>
				<div className={styles.app_col}>
					<Form 
						cityList = {this.state.cityList}
						updateData = {this.updateData}
						getWeather = {this.getWeather} 
						city={this.state.city}
						country={this.state.country}
					/>
					<h3>or</h3>
					<Geolocation 
						getWeather = {this.getWeather}
					/>
				</div>
				<div className={styles.app_col_big}>
					<Weather 
						desc={this.state.desc} 
						windSpeed={this.state.windSpeed} 
						humidity= {this.state.humidity} 
						temp = {this.state.temp} 
						icon={this.state.icon}
						pressure={this.state.pressure}
						name={this.state.name}
						temp_min = {this.state.temp_min}
						temp_max = {this.state.temp_max}
					/>
				</div>
				<div className={`${styles.app_col} ${styles.app_col_mobile}`}>
					<List
						deleteCity={this.deleteCity}
						cityList = {this.state.cityList} 
						getWeather = {this.getWeather}
						isFetch = {this.state.isFetch}
					/>
				</div>
			</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);
