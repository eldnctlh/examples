import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import Popup from './components/popup';
import Top from './components/top';
import {Provider} from 'react-redux';
import store from './store';
import styles from './style.css';

class App extends React.Component {			
	render(){
		return (
			<div>
				<Provider store={store} >
					<Popup />
					<div className={styles.app}>
						<Top loader = 'upcoming' />
						<Main />
						<Top loader = 'top_rated' />
					</div>
				</Provider>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
