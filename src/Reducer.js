import hardCodedList from './supList';
import {FETCH_SUPLIST, FETCH_USERLIST} from './actions';


const initialState = {supList: hardCodedList, userList: []};   

let reducer = (oldState = initialState, action) => {
	switch (action.type) {
        case FETCH_SUPLIST:
            return {...oldState, supList:action.payload};
        case FETCH_USERLIST:
            return {...oldState, userList:action.payload};
        default: return oldState;
    }
}

export default reducer;