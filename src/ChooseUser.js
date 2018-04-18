import React from 'react';
import LinkToUserPage from './LinkToUserPage.js';
import supList from './supList';


let getUserNames = (supList) => {
    let newList = [...new Set(supList.map(sup => sup.username))];
    return newList;
};


let ChooseUser = (props) => {

    return <div className="App">
    <form className="chooseUserName" onSubmit= {(event) => {
        LinkToUserPage(event, props);
    }}>
        <p>Choose User</p>
          <select name="username">{
              getUserNames(supList).map(name => <option value={name}>{name}</option>)
          }</select>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default ChooseUser;