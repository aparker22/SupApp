import React from 'react';

let SortForm = ({nameValue, idValue, nameHandleChange, idHandleChange, FormSubmit, FormReset }) =>
    <form className="sortForm" onSubmit={FormSubmit} onReset={FormReset}>
        <p>Search by:</p>
        Name:<input type="text" name="username" value={nameValue} onChange={nameHandleChange}></input>
        Post ID: <input type="text" name="postid" value={idValue} onChange={idHandleChange}></input>
        <input type="submit" value="Submit"></input>
        <input type="reset"></input>
        </form>

export default SortForm;