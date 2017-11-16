import React, { Component } from 'react'
import { bindActionCreators } from  'redux'
import { connect } from 'react-redux'
import * as index_act from '../../actions/index'
import { mapstate } from '../../reducers/shuju'


class Roots extends Component {

	componentWillMount() {

	}

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React</h1>
                <h2>我是第二页，啊哈哈。有没有发现变化呢。此处为嵌套路由</h2>
            </div>
        )
    }
}

function bindact(dispatch) {
	return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(Roots)