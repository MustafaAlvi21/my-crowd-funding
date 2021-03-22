import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Jumbotron, Container } from 'react-bootstrap';
import web3 from '../ethereum/web3Truffle';
import ContractAddresses from "../ethereum/config/deployedAddress";
import Lottery from "../ethereum/instance/Lottery";
import image from "./fund.JPG"

const contractAddress = ContractAddresses;

function ContributeCampaign(){
    const [ selectedCreators, setSelectedCreators ] = useState([]);
    const [ myAccount, setMyAccount ] = useState("");
    const [ allProjects, setAllProjects ] = useState([]);
    const [ txPending, setTxPending ] = useState([]);
    const [ fund, setFund ] = useState("");

    function contribute(event){
        const lottery = Lottery(web3, contractAddress);    
        
        event.preventDefault();
        // console.log(event.target.parentElement.firstElementChild.children[1]);


        // const lottery = Lottery(web3, contractAddress);
        console.log(myAccount)
        console.log(selectedCreators);
        console.log(fund);
        alert("Your contribution has been proceeded")
        lottery.methods.contributeCampain( selectedCreators ).send({
            from: myAccount,
            value: fund,
        }).then( data => {
            console.log("transaction pendingxg");
            console.log( data );
            alert("Your contribution is in the queue.")
        }).catch( err => {
            setFund("There is an error in contribution.")
            console.log( err );
        })
        setFund("Your contribution is in queue.")
    }
    
    useEffect(() => {
        async function fetchAllCreators() {
            const lottery = Lottery(web3, contractAddress);    
            const response = await lottery.methods.viewProjects().call();
            console.log(response);
            setAllProjects(response)
        }
          fetchAllCreators();
    }, []);
        
     function change (event){
         alert(event.target.value)
         setSelectedCreators(event.target.value);
    }
    
    return(
        <>
        <Row>
            <Jumbotron style={{width: "100%", backgroundImage: `url(${image})`}}>
                <Container>
                    <h1> Contribute a Campaign</h1>
                    <p> This is a modified jumbotron that occupies the entire horizontal space of its parent. </p>
                </Container>
            </Jumbotron>
        </Row>
        <div style={{padding: "50px"}}>
            <Row  className="mx-auto" style={{ display: "flex", justifyContent: "space-around"}}>
                <span  className="mx-auto bg-white" style={{ padding: "20px", borderTopRightRadius: "15px", borderBottomLeftRadius: "15px"}}>
                    <h5> {txPending} </h5>
                    <h1 style={{ textDecorationLine:"underline" }}> Contribute Form</h1>
                <Form>
                    <Form.Group>
                        <Form.Label> Your Account Address</Form.Label>
                        <Form.Control  
                        // onBlur={ (event) => { 
                            //     console.log(myAccount);
                            //     setMyAccount(event.target.value) 
                            // }}            
                            onPaste={(event)=> 
                                // handleChange(event)
                                setMyAccount(event.target.value)
                            }
                            onChange={(event) =>
                                setMyAccount(event.target.value)
                            }
                            value={myAccount}
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label> Amount</Form.Label>
                        <Form.Control type="number" value={fund} onChange={ (event) => setFund(event.target.value) } />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" onChange={change} >
                            {
                                 allProjects.map(( item, i) => 
                                    <option key={i} value={item.Creator}  > { item.Name } </option>
                                 )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={contribute} > Fund It !!! </Button>
                </Form>
                </span>
            </Row>
        </div>
        </>
    )
}

export default ContributeCampaign;