import React from 'react';
import { Link } from 'react-router-dom';

let Footer = () =>
    <div className="footer">
        <Link to="/users">View Posts</Link>
        <Link to="/">Homepage</Link>
        <Link to="/choose">User Info</Link>
    </div>

export default Footer;

