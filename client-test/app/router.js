import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


import App from './component/app';
import Login from './component/login';
import ActivityList from './component/activity/list';
import Home from './component/home';
import { checkAuth } from 'actions/login';

class Routers extends Component {
  constructor(props) {
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
  }
  checkLogin(nextState, replaceState, callback) {
    const AuthToken = localStorage.getItem('token');
    console.log('AuthToken: ',AuthToken);
    if ( AuthToken ) {
      this.props.checkAuth(AuthToken);
      callback();
    } else {
      window.location.href = '/login';
    }
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/login' component={Login} />
        <Route path='/' component={App} onEnter={this.checkLogin}>
          <IndexRoute component={Home} />
          <Route path='activity/list' component={ActivityList} />
        </Route>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
    return {}
};
export default connect(mapStateToProps,{checkAuth})(Routers);