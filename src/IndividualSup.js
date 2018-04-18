import React from 'react';

let IndividualSup = ({sup}) => {
    return <div className="ind-sup">
        <h5>Name: {sup.name}</h5>
        <h5>Email: {sup.email}</h5>
        <h3>{sup.body}</h3>
    </div>
}

export default IndividualSup;