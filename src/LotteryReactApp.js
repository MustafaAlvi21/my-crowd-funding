// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Container } from 'react-bootstrap';
// import web3 from './ethereum/web3Truffle';
// import ContractAddresses from "./ethereum/config/deployedAddress";
// import Lottery from "./ethereum/instance/Lottery";
import Header from './components/navbar';
import Footer from './components/footer';
import CampaignForm from './components/ownerTransfer';
import ContributeCampaign from './components/DelegateTransfer';
import Projects from './components/projectsCards';
import createDelegate from './components/createDelegate';

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/delegate-transfer" component={ ContributeCampaign } />
          <Route exact path="/owner-transfer" component={ CampaignForm } />
          <Route exact path="/campaign" component={ Projects } />
          <Route exact path="/create-delegate" component={ createDelegate } />
        </Switch>
        <Footer/>
      </Router>      
    </>

  );
}

export default App;
