
const FETCH_SUPLIST = 'FETCH_SUPLIST';
export let fetchSupList = (newSupList) => ({type: FETCH_SUPLIST, payload: newSupList});
let fetchSupListReducer = (state, action) => ({...state, supList:action.payload});
fetchSupList.toString = () => FETCH_SUPLIST;

const FETCH_USERLIST = 'FETCH_USERLIST';
export let fetchUserList = (newUserList) => ({type: FETCH_USERLIST, payload: newUserList});
let fetchUserListReducer = (state, action) => ({...state, userList:action.payload});
fetchUserList.toString = () => FETCH_USERLIST;

let reducers = ({
    [fetchSupList]: fetchSupListReducer,
    [fetchUserList]: fetchUserListReducer,
})

export default reducers;