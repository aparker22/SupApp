import hardCodedList from './supList';
import reducers from './actions';


const initialState = {supList: hardCodedList, userList: []};  

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;