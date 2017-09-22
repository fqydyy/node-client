import React,{ Component }from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './component/app';
import Login from './component/login';
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
          <Route path='login' component={Login}></Route>
        </Route>
      </Router>

    )
  }



}
export default Routers;
