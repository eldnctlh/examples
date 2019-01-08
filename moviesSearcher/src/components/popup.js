import React from 'react';
import styles from '../style.css';
import {connect} from 'react-redux';
import closePopup from '../actions/popupActionDelete';

class Popup extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault;
        e.target == document.querySelector(`.${styles.popup_bg}`) || e.target == document.querySelector(`.${styles.popup_close}`) ? (
            this.props.dispatch(closePopup())
        ) : (
            null
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.popup[0] ? (
                        <div onClick={(e) => this.handleClick(e)} className={styles.popup_bg}>
                            <div className={styles.popup}>
                                <button onClick = {this.handleClick} className={styles.popup_close}>Close</button>
                                <div className={styles.popup_flex}>
                                    <img src={this.props.popup[0].src} />
                                    <div>
                                        <h3>{this.props.popup[0].title}</h3>
                                        <h4>{this.props.popup[0].date}</h4>
                                        <p>{this.props.popup[0].desc}</p>
                                        
                                        <iframe 
                                            src={`https://www.youtube.com/embed/${this.props.popup[0].video}`}
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
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

function mapStateToProps(state) {
    return {
        popup: state.popup
    }
}

export default connect(mapStateToProps)(Popup);