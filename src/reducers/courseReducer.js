import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
	switch(action.type){
		case types.CREATE_COURSE:
			return  [...state, //returns a new instance of the state array
						Object.assign({}, action.course)
			];

		default:
			return state;
	}
}
