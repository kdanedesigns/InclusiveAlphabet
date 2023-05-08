import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home"
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/register">Register</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/account">Account</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/account" component={Account}/>
        </Switch>
      </div>
      </BrowserRouter>
          Login Space
    </div>
  );
}

export default App;