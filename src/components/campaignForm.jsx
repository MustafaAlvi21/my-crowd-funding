import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Jumbotron, Container } from 'react-bootstrap';
import web3 from '../ethereum/web3Truffle';
import ContractAddresses from "../ethereum/config/deployedAddress";
import Lottery from "../ethereum/instance/Lottery";
import image from "./campaign.JPG"

const contractAddress = ContractAddresses;


function CampaignForm(){
    const [ campainName, setCampainName ] = useState("");
    const [ campainDescription, setCampainDescription ] = useState("");  
    const [ camapinFund, setCamapinFund ] = useState("");
    const [ selectedAddress, setSelectedAddress ] = useState("");
 
  async function createCampain(e) {
    try {
        e.preventDefault();
        alert('it works!');
        const lottery = Lottery(web3, contractAddress);
        const response = await lottery.methods.createProject(campainName, campainDescription,camapinFund).send({
            from: selectedAddress,
        });
        console.log(response);
        console.log(campainName); 
        console.log(campainDescription); 
        console.log(camapinFund);

    } catch (err) {
      console.log(err);
    }
  }

  // async function createCampain() {
  //   try {
  //     console.log(campainName); 
  //     console.log(campainDescription); 
  //     console.log(camapinFund);
      
  //     const lottery = Lottery(web3, contractAddress);
    //   // const response = await lottery.methods.createProject(campainName, campainDescription,camapinFund).send({
    //     // from: selectedAddress,
    //   // });
    //   // console.log(response);
    // }
    // catch (err) {
    //   console.log(err);
    // }
  // }

//  function hello (e){
//     e.preventDefault();
//     alert('it works!');
//   }

    return(
        <>
        <Row>
            <Jumbotron style={{width: "100%", backgroundImage: `url(${image})`}}>
                <Container>
                    <h1> Campaign Form</h1>
                    <p> This is a modified jumbotron that occupies the entire horizontal space of its parent. </p>
                </Container>
            </Jumbotron>
        </Row>
        <div style={{ padding: "50px" }}>
            <Row className="mx-auto" style={{ display: "flex", justifyContent: "space-around"}}>
            <span className="mx-auto bg-white" style={{boxShadow:"" ,padding: "20px", borderTopRightRadius: "15px", borderBottomLeftRadius: "15px"}}>
                <Form>
                    <h1 style={{ textDecorationLine:"underline" }}> Campaign Creation</h1>

                    <Form.Group>
                        <Form.Label>Account Address</Form.Label>
                        <Form.Control required value={selectedAddress} onChange={event => setSelectedAddress(event.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Campaign Name</Form.Label>
                        <Form.Control required value={campainName} onChange={event => setCampainName(event.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Campaign Description</Form.Label>
                        <Form.Control required value={campainDescription} onChange={event => setCampainDescription(event.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Funding Required <small style={{color: "gray"}}>in wei</small> </Form.Label>
                        <Form.Control type="number"  required value={camapinFund} onChange={event => setCamapinFund(event.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={createCampain}> Create It !!! </Button>
                </Form>
            </span>
            </Row>
        </div>
        </>
    )
}

export default CampaignForm;