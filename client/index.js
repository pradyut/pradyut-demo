//Lib
import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import {Router, Route,
          NoMatch,
          browserHistory}         from 'react-router';
import { createStore, 
          combineReducers }       from 'redux'
import { syncHistoryWithStore, 
          routerReducer }         from 'react-router-redux'

// Components
import App                        from '../shared/components/App';
import Dashboard                  from '../shared/components/Dashboard';
import FundDetails                from '../shared/components/FundDetails';
import FundCreate                 from '../shared/components/FundCreate';
import Funds                      from '../shared/reducers/funds';

import './css/styles.styl';


const store = createStore(
  combineReducers({
    Funds,
    routing: routerReducer
  })
);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <Provider store={store}>
    <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Dashboard} />
      <Route path="/funds/:id" component={FundDetails} />
      <Route path="/funds-edit/" component={FundCreate} />
      <Route path="/funds-edit/:id" component={FundCreate} />
      <Route path="*" component={NoMatch}/>
    </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);







