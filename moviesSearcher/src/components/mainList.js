import React from 'react';
import axios from 'axios';
import MovieItem from './movieItem';
import {connect} from 'react-redux';
import addMain from '../actions/mainAction';
import addMainSearch from '../actions/mainActionSearch';
import { API_KEY } from '../apiKey';
import styles from '../style.css';


class Main extends React.Component {
    constructor() {
        super();
        this.fetch = this.fetch.bind(this);
    }
    fetch(call, value) {
        let toCall;
        call == 'default' ? (
            toCall = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&append_to_response=videos&page=1`
        ) : (
            toCall = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value || this.props.value}&append_to_response=videos&page=1`
        )
        axios.get(toCall)
        .then((response) => {
            response.data.results.map((e) => {
                call == 'default' ? (
                    this.props.dispatch(addMain(
                        e.id,
                        e.title, 
                        `https://image.tmdb.org/t/p/w500/${e.poster_path}`, 
                        e.release_date, 
                        e.overview,
                        'default'
                    ))
                ) : (
                    this.props.dispatch(addMainSearch(
                        e.id, 
                        e.title, 
                        `https://image.tmdb.org/t/p/w500/${e.poster_path}`, 
                        e.release_date, 
                        e.overview,
                        'search'
                    ))
                )
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentWillMount() {
        this.fetch('default')
    }
    componentWillReceiveProps(nextProps) {
        this.props.value !== nextProps.value ? (
            this.fetch('search', nextProps.value)
        ) : (
            null
        )
    }
    render() {
        return (
            <div className={styles.app_main_list}>
                {
                    this.props.main ? (
                        this.props.main.map((e, id) => {
                            return (
                                <MovieItem
                                    key={id}
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
        main: state.main
    }
}

export default connect(mapStateToProps)(Main);