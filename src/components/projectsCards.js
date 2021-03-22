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
    const [ allProjects, setAllProjects ] = useState([]);

    async function viewAllProjects(){
        try {
            const lottery = Lottery(web3, contractAddress);    
            const response = await lottery.methods.viewProjects().call();
            console.log(response);
            setAllProjects(response)
        }
        catch (err) {
            console.log(err);
        }
    
    }

    useEffect(() => {
        viewAllProjects();
    }, [])

    //   console.log("allProjects")
    //   console.log(allProjects)
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

        <Row>
        </Row>
            <h1 style={{ backgroundColor: "white", marginBottom: "30px", paddingLeft: "50px", paddingTop: "30px", paddingBottom: "10px"}}>All Projects </h1>
        <div style={{padding: "0px 50px 0px 50px"}}>
            <Row>
            { 
                allProjects.map(( item, i) => 
                    <div className="col-3"> 
                        <Card key={ i } style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{padding: "10px"}} src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/plxqhfldvsygocadsn55" />
                            <Card.Body>
                                <Card.Title> {item.Name} </Card.Title>
                                <Card.Text> {item.Description} </Card.Text>
                                <Card.Text>
                                    <span style={{color:"gray"}}> { ((item.ReceiveAmount / item.RequiredAmount) * 100).toFixed(0) }% raised </span> 
                                    <ProgressBar variant="success" now={ ((item.ReceiveAmount / item.RequiredAmount) * 100) } />
                                </Card.Text>
                                
                                <a href={`/contribute-campaign`}>
                                    <Button variant="info" style={{width: "100%"}}>Click to Fund</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </div> 
                )
            }
            </Row>
        </div>
        </>
    )
}

export default Projects;