import React, {Component} from 'react'
import { Input, Alert } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as index_act from '../../actions/index'
import { mapstate } from '../../reducers/shuju'
import Head from '../public/head' 
import { Link } from 'react-router-dom'
import { cuns } from 'esn'
import history from '../public/history'

class Index extends Component {
	constructor(arg) {
		super(arg);
		this.handleTodos = this.handleTodos.bind(this)
	}

	handleLinkTo() {
		cuns('enheng', "我是从首页传来的参数");
		history.push('/items');
	}

	handleTodos(e) {
		this.props.act_index_tit(e.target.value)
	}

	render() {
		return(
			<div className="homepage">
				<Head {...this.props} />
				<div className="menu-bar">
					<Link to="/first">第一页</Link><Link to="/second">第二页</Link>
				</div>
				<div>
					{this.props.children}
				</div>
				<div>
					<Input type="text" onChange={this.handleTodos} placeholder='填入字下面会变化' />
				</div>
				<div><Alert message={this.props.red_index_tit} type="success" /></div>
				<div className="index-link" onClick={this.handleLinkTo} >点击跳转到列表页</div>
			</div>
		)
	}
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);