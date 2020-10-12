import React, { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import Appointment from './components/Appointment/Appointment/Appointment';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/appointment">
            <Appointment />
          </Route>

          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>

          <Route path="/dashboard/allPatients">
            <AllPatients />
          </Route>

          <Route path="/dashboard/addDoctor">
            <AddDoctor />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
