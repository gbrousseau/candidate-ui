import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import WorkOrder from './components/WorkOrder';

const appStyle = { margin: '50px 50px 0px 100px', width: 'auto', textAlign: 'left' };

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
                 src="/logo-header-879eb71927803a4988b97d045e177be0.svg"
                 width="296"
                 height="55"
                 className="d-inline-block align-top" />
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/workorder/:id" component={WorkOrder} />
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div style={ appStyle }>
      <h2>Nothing here</h2>
    </div>
  );
}

function About() {
  return (
    <div className="column-content col" style={ appStyle }>
      <section className="artdeco-card p4 mb3">
        <h4 className="t-18 t-black t-normal mb2">
          Overview
        </h4>

        <p className="break-words white-space-pre-wrap mb5 t-14 t-black--light t-normal">Founded in 2014, our mission is
          to empower hard-working technicians, facility managers, and maintenance teams to become more productive
          through the adoption of new technology. Today, UpKeep is the #1 mobile-first computerized maintenance
          management system (CMMS) on the market, developed to simplify work orders and asset management. We are
          positively impacting over 200,000 users around the world, from small businesses to large enterprises including
          Yamaha, jet.com and Unilever! After graduating from Y Combinator, we’ve raised $50M in capital funding (Series
          A &amp; B) from some of the top VC’s in the world, including Emergence Capital (Salesforce.com and ZOOM) and
          Insight Partners (DocuSign &amp; Twitter). Only 1% of venture capital is funneled towards the deskless
          workforce, yet 80% of the global workforce is not sitting at a desk. We are investing in the future of
          maintenance and the underserved deskless worker!

          We've also been recognized as a "Best Place to Work" by Built in LA and Inc. Magazine!

          Named the #1 Facility Management Software by GetApp &amp; Gartner, #1 for Usability by Software Advice, and #1
          Easiest to Use CMMS by G2 Crowd.&nbsp;

          For more information about UpKeep, visit http://www.onupkeep.com

          You can also join us at "The Maintenance Community" on LinkedIn, the largest online community of maintenance
          professionals in the world, where we host weekly conversations and contests, all centered around
          maintenance! </p>

        <dl className="overflow-hidden">
          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Website
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            <a tabIndex="0" rel="noopener noreferrer" target="_blank" href="http://www.onupkeep.com" id="ember1259"
               className="link-without-visited-state ember-view">
            <span className="link-without-visited-state" dir="ltr">
              http://www.onupkeep.com
            </span>
            </a>
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Phone
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            <a tabIndex="0" rel="noopener noreferrer" target="_blank" href="tel:+1 (323) 880-0250" id="ember1260"
               className="link-without-visited-state ember-view">
            <span aria-hidden="true" className="link-without-visited-state" dir="ltr">
              +1 (323) 880-0250
            </span>
              <span className="visually-hidden">
              Phone number is +1 (323) 880-0250
            </span>
            </a>
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Industry
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            Internet
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Company size
          </dt>

          <dd className="org-about-company-module__company-size-definition-text t-14 t-black--light mb1 fl">
            51-200 employees
          </dd>
          <dd className="org-page-details__employees-on-linkedin-count t-14 t-black--light mb5">
            114 on LinkedIn
            <div id="artdeco-gen-43" className="ember-view">
              <div id="ember1264" className="ember-view" />
            </div>
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Headquarters
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            Los Angeles, California
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Type
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            Privately Held
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Founded
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal">
            2014
          </dd>

          <dt className="org-page-details__definition-term t-14 t-black t-bold">
            Specialties
          </dt>
          <dd className="org-page-details__definition-text t-14 t-black--light t-normal" dir="ltr">
            EAM, CMMS, Work Order Software, Maintenance Management, reliability, maintenance software, and asset
            management software
          </dd>
        </dl>
      </section>
    </div>
  );
}