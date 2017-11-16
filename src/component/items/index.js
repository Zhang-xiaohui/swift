import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as index_act from '../../actions/index'
import { mapstate } from '../../reducers/shuju'
import {qus} from 'esn' 

class Items extends Component {

	componentWillMount() {
		// this.props.get('/list',{r:'0.7153214477881407'},(data)=>{
  //           this.props.act_list(data.data.msg.newlist)
  //       })
	}
	render() {
        // let list = this.props.red_list.map((data,index)=>(
        //     <div key={index}>
        //         <div className="list_img"><a href={data.url} target="_blank"><img src={data.appthumb} alt=""/></a></div>
        //         <div className="list_tit">{data.title}</div>
        //         <div>{data.pubdate}</div>
        //         <div>浏览量：{data.play}</div>
        //     </div>))
        return (
            <div>
                <div className="first">
                    <h1>listItem</h1>
                    <h3 className="tt">{qus('enheng')}</h3>
                </div>
                <div className="list">
                    <img className="wa-img" src={require("../../images/huluwa.jpg")} alt="xx"/>
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Items);