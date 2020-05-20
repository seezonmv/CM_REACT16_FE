import React from 'react';
import { Provider } from 'react-redux';
 import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom'; 
import './App.css';
import Header from './modules/admin/users/Headers';
import Footer from './modules/admin/users/Footer';
import UserList from './modules/admin/users/UserList';

import store from './store/createStore';
import NewUser from './modules/admin/users/NewUser';
import EditUser from './modules/admin/users/EditUser';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect exact path="/" to="/admin/users"/>
              </Route>
              <Route exact path="/admin/users" component={UserList}/>
              <Route path="/admin/users/new" component={NewUser}/>
              <Route path="/admin/users/:id" component={EditUser}/>
            </Switch>
          </Router>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
