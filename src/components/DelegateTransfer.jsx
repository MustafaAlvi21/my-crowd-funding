import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Jumbotron, Container } from 'react-bootstrap';
import web3 from '../ethereum/web3Truffle';
import ContractAddresses from "../ethereum/config/deployedAddress";
import Lottery from "../ethereum/instance/Lottery";
import image from "./fund.JPG"
import Loader from './loader';

const contractAddress = ContractAddresses;

/**  -----------------------------------------------  **/ 
/**         Transfer Through Delegate Account         **/ 
/**  -----------------------------------------------  **/ 


function ContributeCampaign(){
    const [ OwnerAccount, setOwnerAccount ] = useState("");
    const [ receiverAccount, setReceiverAccount ] = useState("");
    const [ delegateAccount, setDelegateAccount ] = useState("");
    const [ fund, setFund ] = useState("");
    const [ loading, setLoading ] = useState(false);

    async function contribute(event){
        event.preventDefault();
        
        const lottery = Lottery(web3, contractAddress);    
        const managerAddress = await lottery.methods.managerAddress().call();

        console.clear();
        console.log(managerAddress)
        console.log(delegateAccount);
        console.log(receiverAccount);
        console.log(fund);
        setOwnerAccount("")
        setReceiverAccount("")
        setDelegateAccount("")
        setLoading(true)

        lottery.methods.transferFrom( managerAddress, receiverAccount, fund ).send({
            from: delegateAccount,
        }).then( data => {
            setLoading(false)
            console.log("transaction pendingxg");
            console.log( data );
            alert("Token Transfer Successfully")
        }).catch( err => {
            setLoading(false)
            setFund("There is an error in contribution.")
            console.log( err );
        })
        setFund("Your contribution is in queue.")
    }
    
    return(
        <>
        <Row>
            <Jumbotron style={{width: "100%", backgroundImage: `url(${image})`}}>
                <Container>
                    <h1> Token Transfer By Delegate</h1>
                    <p> This is a modified jumbotron that occupies the entire horizontal space of its parent. </p>
                </Container>
            </Jumbotron>
        </Row>
        <div style={{padding: "50px"}}>
            <Row  className="mx-auto" style={{ display: "flex", justifyContent: "space-around"}}>
                <span  className="mx-auto bg-white" style={{ padding: "20px", borderTopRightRadius: "15px", borderBottomLeftRadius: "15px"}}>
                    <h5>  </h5>
                    <h1 style={{ textDecorationLine:"underline" }}> Delegate Token</h1>
                <Form>
                    {/* <Form.Group>
                        <Form.Label> Owner Account Address</Form.Label>
                        <input className="form-control"  
                            onPaste={(event)=> setOwnerAccount(event.target.value)}
                            onChange={(event) => setOwnerAccount(event.target.value)}
                            value={OwnerAccount}
                        />
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label> Delegate Account Address</Form.Label>
                        <input className="form-control"  
                            onPaste={(event)=> setDelegateAccount(event.target.value)}
                            onChange={(event) => setDelegateAccount(event.target.value)}
                            value={delegateAccount}
                        />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label> Receiver Account Address</Form.Label>
                        <input className="form-control"  
                            onPaste={(event)=> setReceiverAccount(event.target.value)}
                            onChange={(event) => setReceiverAccount(event.target.value)}
                            value={receiverAccount}
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Set Token Access</Form.Label>
                        <input className="form-control" type="number" value={fund} onChange={ (event) => setFund(event.target.value) } />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={contribute} > Submit </Button>
                </Form>
                </span>
            </Row>
        </div>

        <Row>
        {/* <Loader /> */}
            {loading ? <Loader /> : " "  }
        </Row>

        </>
    )
}

export default ContributeCampaign;