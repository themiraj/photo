import React,{Component} from 'react';
import { Container,Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import axios from 'axios';

class Navigation extends React.Component{
    render(){
        const {search} = this.props
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Photo Gallary</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <Form inline>
                        <input type="text" onKeyUp={search} placeholder="Search" className="btn custom-btn btn-default mr-sm-2" ref="LoginInput" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default Navigation;
