import React from 'react';

let DisplayUser = ({user, ListPosts}) =>
    <div>
        <h2>{user.name}</h2>
        <h3>{user.id}</h3>
        <h3>{user.email}</h3>
        <h4>{user.website}</h4>
        <ListPosts id={user.id} />
        </div>

export default DisplayUser;