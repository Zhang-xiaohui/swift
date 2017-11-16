import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './component/public/history'
import Second from './component/list/second'
import First from './component/list/first'
import Items from './component/items/index'
import Home from './component/homepage/index'

import './style/app.css';

export default class App extends Component {

	render() {
		return(
			<Router history={history}>
				<div>
					<Switch>
						<Route path="/items" component={Items}/>
						<Home>
							<Route exact path="/" component={First}/>
							<Route path="/first" component={First}/>
							<Route path="/second" component={Second}/>
						</Home>
					</Switch>					
				</div>
			</Router>
		)
	}

}
