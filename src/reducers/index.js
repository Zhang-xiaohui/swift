import { combineReducers } from 'redux'

export function red_index_tit (state = '啊哈哈，你变我就变', action) {
	switch (action.type) {
		case 'INDEX_TIT': 
			return action.data; break;
		default:
			return state
	}
}

export function red_head_tit (state = '这是标题', action) {
	switch (action.type) {
		default :
			return state
	}
}
export function red_list(state = [], action) {
	switch (action.type) {
		case 'LIST':
			return action.data; break;
		default:
			return state 

	}
}

const rootReducer = combineReducers({
	red_index_tit,
	red_head_tit,
	red_list
})

export default rootReducer;