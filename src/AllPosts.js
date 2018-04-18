import React, {Component} from 'react';
import supList from './supList.js';
import IndividualSup from './IndividualSup.js';
import SortForm from './SortForm';


class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supListState: [],
      formNameState: '',
      formIDState: '',
    }
  }
  
  componentDidMount() {
    this.setState({supListState: supList})
  }

  render() {

    let { supListState, formNameState, formIDState } = this.state;

    let nameHandleChange = (event) => 
      this.setState({formNameState: event.target.value});

    let idHandleChange = (event) => 
    this.setState({formIDState: event.target.value});

    let FormSubmit = (event) => {
      event.preventDefault();
      let username = event.target.username.value;
      let postID = event.target.postid.value;
      let newSupList=[];
      if (username === '') {
        newSupList = supList.filter( sup => sup.postID === postID)
      } else { 
        newSupList = supList.filter( sup => sup.username === username)
      }
      return this.setState( {supListState: newSupList, formNameState: '', formIDState: ''} )
      }

    return <div className="App">
        <SortForm nameValue={formNameState} idValue={formIDState} nameHandleChange={nameHandleChange} idHandleChange={idHandleChange} FormSubmit={FormSubmit}/>
        <div>{
          supListState.map( sup =>  <IndividualSup key={sup.postID} sup={sup} />)
        }</div>
      </div>
    }
  }

export default AllPosts;