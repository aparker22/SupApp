import React from 'react';

let IndividualSup = ({sup}) => {
    return <div className="ind-sup">
        <h3>{sup.body}</h3>
        <h5>{sup.username}</h5>
    </div>
}

export default IndividualSup;