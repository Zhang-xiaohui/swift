import React, { Component } from 'react'
import { bindActionCreators } from  'redux'
import { connect } from 'react-redux'
import * as index_act from '../../actions/index'
import { mapstate } from '../../reducers/shuju'

class App extends Component {

	componentWillMount() {

	}

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React</h1>
                <h2>我是第一页，啊哈哈哈哈</h2>
            </div>
        )
    }
}

function bindact(dispatch) {
	return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(App)