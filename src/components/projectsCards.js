import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import web3 from '../ethereum/web3Truffle';
import ContractAddresses from "../ethereum/config/deployedAddress";
import Lottery from "../ethereum/instance/Lottery";
import { Button, Card, Row, Jumbotron, Container, ProgressBar } from 'react-bootstrap';
import image from "./projects.JPG"
import image2 from "./projects2.JPG"

const contractAddress = ContractAddresses;


function Projects(props){
    const [ totalSupply, setTotalSupply ] = useState("");
    const [ symbol, setSymbol ] = useState("");
    const [ name, setName ] = useState("");
    const [ balanceOfOwner,  setBalanceOfOwner ] = useState("");

    async function viewtotalSupply(){
        try {
            const lottery = Lottery(web3, contractAddress);    
            // console.log(lottery)
            const totalSupply = await lottery.methods.totalSupply().call();
            const symbol = await lottery.methods.symbol().call();
            const name = await lottery.methods.name().call();
            const managerAddress = await lottery.methods.managerAddress().call();
            const balanceOf = await lottery.methods.balanceOf(managerAddress).call();
            
            // console.log(balanceOf);
            // console.log(totalSupply);
            // console.log(symbol);
            // console.log(name);
            setBalanceOfOwner(balanceOf)
            setTotalSupply(totalSupply)
            setSymbol(symbol)
            setName(name)
        }
        catch (err) {
            console.log(err);
        }    
    }

    useEffect(() => {
        viewtotalSupply();
    }, [])

    return(
        <>
        <Row>
            <Jumbotron style={{width: "100%", marginBottom:"0px", backgroundImage: `url(${image})`}}>
                <Container>
                    <h1> Crowd Funding Campaigns </h1>
                    <p> To run a successful crowdfunding campaign, you need to capture the attention of a large number of backers and convince them that your project is worthy of their investment.. </p>
                </Container>
            </Jumbotron>
            <img src={image2} style={{width: "100%"}} alt=""/>
        </Row>

            <h1 style={{ backgroundColor: "white", marginBottom: "30px", paddingLeft: "50px", paddingTop: "30px", paddingBottom: "10px"}}>All Projects </h1>
        <div style={{padding: "0px 50px 0px 50px"}}>
            <Row>
                <div className="col-3"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{padding: "10px"}} src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/plxqhfldvsygocadsn55" />
                        <Card.Body>
                            <Card.Title> Name: {name} </Card.Title>
                            <Card.Text> Symbol: {symbol} </Card.Text>
                            <Card.Text>
                                <span style={{color:"gray"}}>  Total Token Supply: <strong>{totalSupply}</strong> </span> 
                                <br/>
                                <span style={{color:"gray"}}>  Token Transfered: <strong>{(totalSupply - balanceOfOwner)}</strong> </span> 
                                <ProgressBar variant="success" now={ (((totalSupply - balanceOfOwner) / totalSupply) * 100) } />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div> 
            </Row>
        </div>
        </>
    )
}

export default Projects;