import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Admin from "./components/Admin/Admin";
// import Orders from "./components/Orders/Orders";
import './App.css';
import Home from "./components/Home/Home/Home";
// import NoMatch from "./components/NoMatch/NoMatch";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Login from "./components/Login/Login";
// import CheckOut from "./components/CheckOut/CheckOut";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p className="btn btn-primary">User Name: {loggedInUser.name}</p> */}
        <Router>
          <div>
            <Switch>
              {/* <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/orders">
                <Orders />
              </PrivateRoute>
              <PrivateRoute path="/checkout/:id">
                <CheckOut />
              </PrivateRoute> */}
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route path="/login">
                <Login />
              </Route> */}
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
