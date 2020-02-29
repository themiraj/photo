import React from 'react';
import { Button,Modal } from 'react-bootstrap';

class Modalpop extends React.Component{
    state = {
        show:false
    }
  render(){
    // const [show, setShow] = useState(false);
    const handleClose = () => this.setState({
        show:false
    })
    const handleShow = () =>  this.setState({
        show:true
    })
    return(
        <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }

}
export default Modalpop;