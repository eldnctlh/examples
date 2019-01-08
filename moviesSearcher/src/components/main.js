import React from 'react';
import styles from '../style.css';
import MainList from './mainList';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className={styles.app_main}>
                <h2>Movie discover</h2>
                <input onChange={(e) => this.handleChange(e)} placeholder='Search movies' />
               <MainList value = {this.state.value} />
            </div>
        )
    }
}



export default Main;