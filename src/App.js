import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    // <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
    // </ThirdwebProvider>
  );
}

export default App;
