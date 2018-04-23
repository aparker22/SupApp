import React, {Component} from 'react';
import getData from './getUserPosts.js'
import DisplayUser from './DisplayUser';
import IndividualSup from './IndividualSup.js';
import {fetchUserList, fetchSupList} from './actions';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {supList: state.supList, userList: state.userList}
};

let mapDispatchToProps = (dispatch) => {
return {dispatch: dispatch}
};

class UserInfoPage extends Component {

  componentDidMount() {
    let {dispatch} = this.props;
    getData.getUserInformation()
    .then(newUserList => dispatch(fetchUserList(newUserList)))
    getData.getUserPosts()
    .then(newSupList => dispatch(fetchSupList(newSupList)));
}

  render() {
  let { userList, supList } = this.props;
  let props = this.props;
  
  let listPosts = ({id}) => {
    let list = supList.filter((sup) => sup.id === id);
    return list.map( sup => <IndividualSup key={sup.id} sup={sup} />)
  }

  let ListUsers = (foundUser) => userList.map( (user) => {
    if (user.name === props.match.params.username) {
      return <DisplayUser user={user} key={user.name} ListPosts={listPosts}/>
    } else {
      return '';
    }
  })

  return <div className="App">
  <h1>Welcome to {props.match.params.username}'s profile!</h1>
  <div>
  <div>{
    <ListUsers />
  }</div>
  </div>
  </div>
  }
}

let UserPage = connect(mapStateToProps, mapDispatchToProps)(UserInfoPage)

export default UserPage;