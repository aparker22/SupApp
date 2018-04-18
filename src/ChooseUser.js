import React, {Component} from 'react';
import LinkToUserPage from './LinkToUserPage.js';
import getData from './getUserPosts.js'

class ChooseUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userList: [],

        }
    }

    componentDidMount() {
        getData.getUserInformation()
        .then(res => this.setState({userList: res}))
    }
    

    render() {
    let props = this.props;
    let {userList} = this.state;

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

export default ChooseUser;