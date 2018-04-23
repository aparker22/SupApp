import React, {Component} from 'react';
import IndividualSup from './IndividualSup';
import SortForm from './SortForm';
import getData from './getUserPosts'
import {connect} from 'react-redux';
import { fetchSupList } from './actions';

let mapStateToProps = (state) => {
    return {supList: state.supList}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class Users extends Component {

  componentDidMount() {
    let {dispatch} = this.props;
    getData.getUserPosts()
    .then((newSupList) => {
      return dispatch(fetchSupList(newSupList))
    });
  }

  render() {
    let {supList} = this.props;
    if (supList === undefined) {
      return <p>Loading....</p>
    } else {
    return <div className="App">
    <SortForm />
    <div>{
      supList.map( sup =>  <IndividualSup key={sup.id} sup={sup}  />)
    }</div>
    </div>
  }
}
}

let AllPosts = connect(mapStateToProps, mapDispatchToProps)(Users)

export default AllPosts;