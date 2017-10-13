import React,{ Component }from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './component/app';
import Login from './component/login';
import ActivityList from './component/activity/list'
import Home from './component/home'

class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='login' component={Login} />
          <Route path='activity/list' component={ActivityList} />
        </Route>
      </Router>

    )
  }
}
export default Routers;
