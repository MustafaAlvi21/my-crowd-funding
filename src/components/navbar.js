import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from "./logo.JPG"
const Web3 = require("web3");

function Header() {
    return(
        <>
            <Navbar bg="white" variant="light">
                <Navbar.Brand href="#home"> <img src={logo} alt="" width="150px"/> </Navbar.Brand>
                <Nav className="mr-auto"  style={{display: "flex", justifyContent: "space-around", fontStyle: "oblique", fontWeight: "700"}}>
                    <Nav.Link href="/campaign">My Campaign</Nav.Link>
                    <Nav.Link href="/owner-transfer">Owner Transfer </Nav.Link>
                    <Nav.Link href="/delegate-transfer">Delegate Transfer</Nav.Link>
                    <Nav.Link href="/create-delegate">Create Delegate</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default Header;