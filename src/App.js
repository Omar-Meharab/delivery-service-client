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
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";

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
              <PrivateRoute path="/addServices">
                <AddServices />
              </PrivateRoute>
              <PrivateRoute path="/addFeedbacks">
                <AddFeedbacks />
              </PrivateRoute>
              <PrivateRoute path="/manageServices">
                <ManageServices />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
