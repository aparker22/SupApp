import React, {Component} from 'react';
import getData from './getUserPosts';
import { fetchSupList } from './actions';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {supList: state.supList}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class Form extends Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    render() {

        let {dispatch} = this.props;

        let FormSubmit = (event, supList) => {
            event.preventDefault();
            let username = event.target.username.value;
            let postID = Number(event.target.postid.value);
            let newSupList=[];
            
            //I know that a better way to do this would be to query the parameters exactly but unfortunately this backend does not support username query//
            getData.getUserPosts()
            .then( (list) => {
              if (username === '') {
                newSupList = list.filter( sup => sup.id === postID)
              } else { 
                newSupList = list.filter( sup => sup.name === username)
              }
              return dispatch(fetchSupList(newSupList));
              });
            }

        let FormReset = (event) => {
            event.preventDefault();
            let {dispatch} = this.props;
            getData.getUserPosts()
            .then((newSupList) => {
              return dispatch(fetchSupList(newSupList))
            });
        }
        
        return <form className="sortForm" onSubmit={FormSubmit} onReset={FormReset}>
        <p>Search by:</p>
        Name:<input type="text" name="username" ></input>
        Post ID: <input type="text" name="postid" ></input>
        <input type="submit" value="Submit"></input>
        <input type="reset"></input>
        </form>
    }
}

let SortForm = connect(mapStateToProps, mapDispatchToProps)(Form)

export default SortForm;