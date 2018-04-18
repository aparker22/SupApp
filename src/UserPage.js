import React, {Component} from 'react';
import getData from './getUserPosts.js'
import DisplayUser from './DisplayUser';
import IndividualSup from './IndividualSup.js'

class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      postList: [],
    }
  }

  componentDidMount() {
    getData.getUserInformation()
    .then(res => this.setState({userList: res}));
    getData.getUserPosts()
    .then(res=> this.setState({postList: res}));
}

  render() {
  let props = this.props;
  let { userList, postList} = this.state;
  
  let listPosts = ({id}) => {
    let list = postList.filter((post) => post.id === id);
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

export default UserPage;