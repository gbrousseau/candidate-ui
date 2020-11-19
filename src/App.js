import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Dashboard from './components/Dashboard';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img alt="Upkeep"
                 src="logo-header-879eb71927803a4988b97d045e177be0.svg"
                 width="296"
                 height="55"
                 className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar bg="light">
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </Navbar>
          <Navbar bg="light">
            <Navbar.Brand href="/about">About</Navbar.Brand>
          </Navbar>
          <Navbar bg="light">
            <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}