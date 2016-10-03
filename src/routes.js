import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import NotFound from './NotFound';

import WhoWeAre from './components/pages/WhoWeAre';
import WhatWeDo from './components/pages/WhatWeDo';
import WantToHelp from './components/pages/WantToHelp';
import WorkWithUs from './components/pages/WorkWithUs';
import OurVoice from './components/pages/OurVoice';
import WantToLearn from './components/pages/WantToLearn';
import NDoCH_2016 from './components/pages/NDoCH_2016';
import Members from './components/pages/Members';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WhoWeAre}/>
    <Route path="WhatWeDo" component={WhatWeDo}/>
    <Route path="WantToHelp" component={WantToHelp}/>
    <Route path="WorkWithUs" component={WorkWithUs}/>
    <Route path="OurVoice" component={OurVoice}/>
    <Route path="WantToLearn" component={WantToLearn}/>
    <Route path="NDoCH_2016" component={NDoCH_2016}/>
    <Route path="members" component={Members} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
