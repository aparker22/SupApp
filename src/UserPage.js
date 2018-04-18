import React, {Component} from 'react';
import supList from './supList.js';
import IndividualSup from './IndividualSup.js';

class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supListState: [],
      formNameState: '',
      formIDState: '',
    }
  }

  render() {
  let props = this.props;
  return <div className="App">
  <h1>Welcome to {props.match.params.username}'s profile!</h1>
  <div>
  <div>{
      supList.map( (sup) => {
        if (sup.username === props.match.params.username) {
          return <IndividualSup key={sup.postID} sup={sup} />
        } else {
          return '';
        }
      })
  }</div>
  </div>
  </div>
  }
}

export default UserPage;