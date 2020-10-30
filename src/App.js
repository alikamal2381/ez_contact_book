import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Contact from "./components/contacts/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />

          <Route path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
          <Route exact path="/contacts/" component={Contact} />

          <Route path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/" component={User} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
