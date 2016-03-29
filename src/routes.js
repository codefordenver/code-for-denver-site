import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import NotFound from './NotFound';

import WhoWeAre from './components/pages/WhoWeAre';
import WhatWeDo from './components/pages/WhatWeDo';
import WantToHelp from './components/pages/WantToHelp';
import CanWeHelpYou from './components/pages/CanWeHelpYou';
import Blog from './components/pages/Blog';
import WantToLearn from './components/pages/WantToLearn';

import BlogList from './components/segments/BlogList';
import BlogPost from './components/segments/BlogPost';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WhoWeAre}/>
    <Route path="WhatWeDo" component={WhatWeDo}/>
    <Route path="WantToHelp" component={WantToHelp}/>
    <Route path="CanWeHelpYou" component={CanWeHelpYou}/>
    <Route path="WantToLearn" component={WantToLearn}/>
    <Route path="Blog" component={Blog} >
      <IndexRoute component={BlogList}/>
      <Route path=":title" component={BlogPost}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;