import React, {Component} from 'react';
import IndividualSup from './IndividualSup.js';
import SortForm from './SortForm';
import getData from './getUserPosts.js'


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
    this.fetchData()
      .then(res => this.setState({supListState: res}))
  }

  fetchData() {
    return getData.getUserPosts();
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
      let postID = Number(event.target.postid.value);
      let newSupList=[];
      //I know that a better way to do this would be to query the parameters exactly but unfortunately this backend does not support username query//
      this.fetchData().then( (list) => {
        if (username === '') {
          newSupList = list.filter( sup => sup.id === postID)
        } else { 
          newSupList = list.filter( sup => sup.name === username)
        }
        return this.setState( {supListState: newSupList, formNameState: '', formIDState: ''} )
        });
      }

      let FormReset = (event) => {
        event.preventDefault();
        this.fetchData().then( (res) => {
          return this.setState( {supListState: res, formNameState: '', formIDState: ''} )
          });
        }

    return <div className="App">
        <SortForm nameValue={formNameState} idValue={formIDState} nameHandleChange={nameHandleChange} idHandleChange={idHandleChange} FormSubmit={FormSubmit} FormReset={FormReset}/>
        <div>{
          supListState.map( sup =>  <IndividualSup key={sup.id} sup={sup} />)
        }</div>
      </div>
    }
  }

export default AllPosts;