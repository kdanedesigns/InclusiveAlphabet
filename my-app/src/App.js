import React from "react";
import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      Hellllllo?
        <div>
          Hello?
        </div>
        <BrowserRouter>
        <div ClassName="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" component={Home}/>
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
