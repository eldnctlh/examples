import React from 'react';
import axios from 'axios';
import MovieItem from './movieItem';
import {connect} from 'react-redux';
import addTop from '../actions/topAction';
import { API_KEY } from '../apiKey';
import styles from '../style.css'

class Top extends React.Component {
    componentDidMount() {
		axios.get(`https://api.themoviedb.org/3/movie/${this.props.loader}?api_key=${API_KEY}&language=en-US&page=1`)
			.then((response) => {
                response.data.results.map((e, i) => {
                    i < 5 ? (
                        this.props.dispatch(addTop(
                            this.props.loader, 
                            e.id, 
                            e.title, 
                            `https://image.tmdb.org/t/p/w500/${e.poster_path}`, 
                            e.release_date, 
                            e.overview,
                        ))
                    ) : (
                        null
                    )
                })
                this.forceUpdate()
			})
			.catch(function (error) {
				console.log(error);
            });
    }
    render() {
        return (
            <div className={styles.app_col}>
                <h2 className={styles.app_col_title}>{this.props.loader.charAt(0).toUpperCase() + this.props.loader.slice(1).replace('_', ' ')} movies</h2>
                {
                    this.props.load[this.props.loader] ? (  
                        this.props.load[this.props.loader].map((e, id) => {
                            return (
                                <MovieItem
                                    key = {id}
                                    src = {e.src}
                                    title = {e.title}
                                    date = {e.date}
                                    desc ={e.desc}
                                    id = {e.id}
                                />
                            )
                        })
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        load: state.load
    }
}

export default connect(mapStateToProps)(Top);