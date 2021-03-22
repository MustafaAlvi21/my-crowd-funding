import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from "./logo.JPG"

function Header() {
    return(
        <>
            <Navbar bg="white" variant="light">
                <Navbar.Brand href="#home"> <img src={logo} alt="" width="150px"/> </Navbar.Brand>
                <Nav className="mr-auto"  style={{display: "flex", justifyContent: "space-around", fontStyle: "oblique", fontWeight: "700"}}>
                    <Nav.Link href="/campaign">All Campaign</Nav.Link>
                    <Nav.Link href="/new-campaign">Create Campaign</Nav.Link>
                    <Nav.Link href="/contribute-campaign">Fund a Campaign</Nav.Link>
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