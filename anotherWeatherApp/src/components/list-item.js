import React from 'react';
import styles from '../style.css';

class ListItem extends React.Component {
	render() {
		return (
            <li className={styles.list_item}>
                <div className={styles.list_item_main}>
                    {this.props.cityName}, {this.props.country}
                    <div className={styles.list_item_buttons}>
                        <button onClick={() => this.props.getWeather(this.props.cityName, this.props.country)}>Weather</button>
                        <button onClick={() => this.props.deleteCity(this.props.id)}>Delete</button>
                    </div>
                </div>
                {
                   this.props.isFetch == this.props.cityName ? (
                    <p className={styles.error}>Probably this city don't exist</p>
                   ) : (
                       null
                   )
                }
            </li>
		)
	}
}

export default ListItem;