import React from 'react';
import styles from '../style.css';
import {connect} from 'react-redux';
import addPopup from '../actions/popupAction';
import axios from 'axios';
import { API_KEY } from '../apiKey';

class MovieItem extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        axios.get(`http://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=${API_KEY}`)
        .then((response) => {
            this.props.dispatch(addPopup(
                this.props.title, 
                this.props.src, 
                this.props.date, 
                this.props.desc,
                response.data.results[0].key
            ))
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    render() {
        return (
            <div onClick={this.handleClick} className={styles.item}>
                <img src={this.props.src} />
                <h3>{this.props.title}</h3>
                <h4>{this.props.date}</h4>   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        popup: state.popup
    }
}


export default connect(mapStateToProps)(MovieItem);