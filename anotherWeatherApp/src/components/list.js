import React from 'react';
import styles from '../style.css';
import ListItem from './list-item';

class List extends React.Component {
	render() {
		return (
			<div className={`${styles.list} ${styles.block}`}>
                <h2>Your history list</h2>
                <ul>
                    {
                    this.props.cityList.length ? (
                        this.props.cityList.map((e) => (    
                            <ListItem
                                cityName = {e.cityName}
                                country = {e.country}
                                id = {e.id}
                                key = {e.id}
                                getWeather = {this.props.getWeather}
                                deleteCity = {this.props.deleteCity}
                                isFetch = {this.props.isFetch}
                            />
                            ))
                        ) : (
                            null
                        )
                    }
                </ul>
            </div>
		)
	}
}

export default List;