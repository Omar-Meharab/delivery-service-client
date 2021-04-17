import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import AddFeedbacks from "./components/Dashboard/AddFeedbacks/AddFeedbacks";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/addServices">
                <AddServices />
              </Route>
              <PrivateRoute path="/addFeedbacks">
                <AddFeedbacks />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
