import React,{Component} from 'react';
import { Container,Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        console.log(this.props)
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Photo Gallary</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={this.searchHanlder}/>
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default Navigation;
