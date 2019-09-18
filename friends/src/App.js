import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

function App() {
  return (
    <div className='App'>
      <Route component={Login} />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
