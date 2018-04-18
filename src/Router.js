import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header.js';
import Homepage from './Homepage.js';
import AllPosts from './AllPosts.js';
import UserPage from './UserPage.js';
import Footer from './Footer.js';
import ChooseUser from './ChooseUser.js';

let Router = () => 
  <div>
    <HashRouter>
        <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path = "/users" exact component={AllPosts} />
            <Route path = "/choose" component={ChooseUser} />
            <Route path = "/users/:username/" component={UserPage} />
            <Footer />
        </div>
    </HashRouter>
  </div>

export default Router;