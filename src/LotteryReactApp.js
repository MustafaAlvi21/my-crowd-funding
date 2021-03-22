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
// import Cards from './components/projectsCards';
import CampaignForm from './components/campaignForm';
import ContributeCampaign from './components/ContributeCampaign';
import Projects from './components/projectsCards';
// const contractAddress = ContractAddresses[0];
// const contractAddress = ContractAddresses;

function App() {
  // const [ addresses, setAddresses ] = useState([]);
  // const [ selectedAddress, setSelectedAddress ] = useState("");
  // const [ amount, setAmount ] = useState("");
  // const [ campainName, setCampainName ] = useState("");
  // const [ campainDescription, setCampainDescription ] = useState("");  
  // const [ camapinFund, setCamapinFund ] = useState("");
  // const [ allCreators, setAllCreators ] = useState([]);
  // const [ selectedCreators, setSelectedCreators ] = useState([]);
  // const [ allProjects, setAllProjects ] = useState([]);


  // useEffect(() => {
  //   async function fetchData() {
  //     const accounts = await web3.eth.getAccounts()
  //     const lottery =  await Lottery(web3, contractAddress);
  //     const response = await lottery.methods.viewProjects().call();
      
  //     setAddresses(accounts)
  //     setSelectedAddress(accounts[0])
  //     setAllProjects(response)
  //     console.log(response);
  //   }
  //   fetchData();

  // }, []);

  // useEffect(() => {
  // async function fetchAllCreators() {
  //     Lottery(web3, contractAddress).methods.viewAllCreators().call()
  //       .then( data => {
  //         setAllCreators(data);
  //       })
  //       .catch( err => { console.log() });
  //   }
  //   fetchAllCreators();
  // }, []);
  
  
  // async function createCampain() {
  //   try {
  //     console.log(campainName); 
  //     console.log(campainDescription); 
  //     console.log(camapinFund);
      
  //     const lottery = Lottery(web3, contractAddress);
  //     // const response = await lottery.methods.createProject(campainName, campainDescription,camapinFund).send({
  //       // from: selectedAddress,
  //     // });
  //     // console.log(response);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function viewAllProjects(){
    
  //   console.log("selectedAddress => " + selectedAddress);
  
  //   // await lottery.methods.viewProjects().call().then((result) => {

  //     try {
  //       const lottery = Lottery(web3, contractAddress);
  
  //       const response = await lottery.methods.viewProjects().call();
  
  //       console.log(response);
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  
  // }

  // function contribute(){
  //   const lottery = Lottery(web3, contractAddress);
  //   // console.log("selectedAddress => " + selectedAddress);
  //   // console.log("selectedCreators => " + selectedCreators);

  //   lottery.methods.contributeCampain( "0x6aC646018d6c82c1e51836658F9ca95885443e1c" ).send({
  //     from: selectedAddress,
  //     value: 57,
  //   }).then( data => {
  //     console.log("transaction pendingxg");
  //     console.log( data );
  //   }).catch( err => {
  //     console.log( err );
  //   })
  // }
  
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/contribute-campaign" component={ ContributeCampaign } />
          <Route exact path="/new-campaign" component={ CampaignForm } />
          <Route exact path="/campaign" component={ Projects } />
        </Switch>
        <Footer/>
      </Router>

    

    {/* <div className="row">
      {
        allProjects.map(( item, i) => <div className="col"> < Cards keyData={i} data={item}/>  </div> )
      }
    </div>
 */}
      {/* <div>
        <label>Select Address: &nbsp;</label>
        <select onChange={(event) => { setSelectedAddress(event.target.value); }}>
          {addresses.map((value, index) => <option key={index} value={value}>{`${index} ${value}`}</option>)}
        </select>
        <br />
        <br />
        <input type="text" placeholder="amount in ether" value={amount} onChange={event => setAmount(event.target.value)} />
        <button onClick={viewAllProjects}>View All Projects</button>
      </div> */}


      {/* <div>
        <h2>Create new Campain.</h2>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text"  value={campainName} onChange={event => setCampainName(event.target.value)} />   <br/>  <br/>

          <label htmlFor="">Description: </label>
          <input type="text"  value={campainDescription} onChange={event => setCampainDescription(event.target.value)} />   <br/>  <br/>

          <label htmlFor="">Req. Funding: </label>
          <input type="number"  value={camapinFund} onChange={event => setCamapinFund(event.target.value)} /> <br/>  <br/>

          <button onClick={createCampain}> Create Campain</button>
        </div>
      </div> */}


      {/* <div>
        <h2>List Of All Creators </h2>
        <div>
          <select onChange={(event) => { setSelectedCreators(event.target.value); }}>
            {
              // allCreators.map((value, index) => 
                <option key={"index"} value={allCreators[0]} defaultValue={allCreators[0]}> {`${"0"} => ${allCreators[0]}`} </option>
                // )
            }
          </select>
        </div>
      </div> */}


      {/* <button onClick={contribute}> Contribute Campain</button> */}
      
    </>

  );
}

export default App;
