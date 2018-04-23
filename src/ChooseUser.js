import React, {Component} from 'react';
import LinkToUserPage from './LinkToUserPage.js';
import getData from './getUserPosts.js';
import {connect} from 'react-redux';
import {fetchUserList} from './actions';

let mapStateToProps = (state) => {
    return {userList: state.userList}
  };
  
let mapDispatchToProps = (dispatch) => {
return {dispatch: dispatch}
};

class ChooseUserPage extends Component {

    componentDidMount() {
        let {dispatch} = this.props;
        getData.getUserInformation()
        .then(newUserList => dispatch(fetchUserList(newUserList)))
    }
    
    render() {
    let props = this.props;
    let {userList} = this.props;

    let getUserNames = () => {
        let newList = [...new Set(userList.map(sup => sup.name))];
        return newList;
    };

    return <div className="App">
    <form className="chooseUserName" onSubmit= {(event) => {
        LinkToUserPage(event, props);
    }}>
        <p>Choose User</p>
          <select name="username">{
              getUserNames().map(name=><option key={name} value={name}>{name}</option>)
          }</select>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
    }
}

let ChooseUser = connect(mapStateToProps, mapDispatchToProps)(ChooseUserPage);

export default ChooseUser;