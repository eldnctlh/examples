import React from 'react';
import styles from '../style.css';

class Form extends React.Component {
	constructor () {
		super();
		this.state = {
			cityName: '',
			country: '',
			isValid: true,
		}
		this.handleChange = this.handleChange.bind(this);
		this.sendToList = this.sendToList.bind(this);
	}
	handleChange(e) {
		e.target.name == "city" ? (
			this.setState({	
				cityName: e.target.value
			})
		) : (
			this.setState({	
				country: e.target.value
			})
		)
	}
	sendToList(e) {
		let count = 0;
		e.preventDefault();
		this.props.cityList.forEach((e) => {
			this.state.cityName === e.cityName ? (
				null
			) : (
				count++
			)
		})
		count === this.props.cityList.length ? (
			this.state.cityName && this.state.country.length === 2 ? (
				this.setState({
					isValid: true,
				}),
				this.props.updateData(this.state.cityName, this.state.country)
			) : (
				this.setState({
					isValid: false,
				})
			)
		) : (
			null
		)
	}
	render() {
		return (
			<div className={`${styles.form} ${styles.block}`}>
				<h2>Add city and show it's weather</h2>
				<form onSubmit={(event) => this.sendToList(event)}>
					<input name='city' onChange={this.handleChange} value={this.state.city} placeholder='Type your city' />
					<input name='country' onChange={this.handleChange} value={this.state.country} placeholder='Type your country' />
					{
						this.state.isValid ? (
							null
						) : (
							<p className={styles.error}>Form not valid, type correct domain (for example 'UA')</p>
						)
					}
					<button>Get weather</button>
				</form>	
			</div>
		)
	}
}

export default Form;