import React, { Component } from 'react';

import { Header, Main } from './components';

import './assets/styles/styles.scss';

export default class App extends Component {
	render() {
		return (
			<div>
	  			<Header />
	  			<Main />
			</div>
		)
	}
}