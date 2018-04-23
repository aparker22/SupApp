import React, {Component} from 'react';
import IndividualSup from './IndividualSup';
import SortForm from './SortForm';
import getData from './getUserPosts'
import {connect} from 'react-redux';
import { fetchSupList } from './actions';


// let nameHandleChange = (event) => 
// this.setState({formNameState: event.target.value});

// let idHandleChange = (event) => 
// this.setState({formIDState: event.target.value});

// let FormSubmit = (event) => {
// event.preventDefault();
// let username = event.target.username.value;
// let postID = Number(event.target.postid.value);
// let newSupList=[];
// //I know that a better way to do this would be to query the parameters exactly but unfortunately this backend does not support username query//
// this.fetchData().then( (list) => {
//   if (username === '') {
//     newSupList = list.filter( sup => sup.id === postID)
//   } else { 
//     newSupList = list.filter( sup => sup.name === username)
//   }
//   return this.setState( {supListState: newSupList, formNameState: '', formIDState: ''} )
//   });
// }

// let FormReset = (event) => {
//   event.preventDefault();
//   this.fetchData().then( (res) => {
//     return this.setState( {supListState: res, formNameState: '', formIDState: ''} )
//     });
//   }

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
      supList.map( sup =>  <IndividualSup key={sup.id} sup={sup} />)
    }</div>
    </div>
  }
}
}

let AllPosts = connect(mapStateToProps, mapDispatchToProps)(Users)

export default AllPosts;