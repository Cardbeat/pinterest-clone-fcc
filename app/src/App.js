import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Image from "./components/Image/Image";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/image" component={Image} />
      </Router>
    </Provider>
  );
};

export default App;
