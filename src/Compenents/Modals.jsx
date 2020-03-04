import React from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';

class Modalpop extends React.Component{
    state = {
      show:false
    }
    componentDidMount(){
      const {open} = this.props; 
      
        this.setState({show:open})
      
    }


    toggleModal=()=>{
      const {show} = this.state;
      const {closeModal} = this.props;

      closeModal(false);
      this.setState({show:false})
    }

    render(){
 
    const {photoId,open} = this.props 
    const {show} = this.state;
    return(
      <div>
      
        <Modal show={show} onHide={this.toggleModal}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        key={photoId.id}
        >
          <Modal.Header closeButton>
            <Modal.Title>{photoId.alt_description}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={8} style={{borderRight:'1px solid #ccc'}}>
                <img src={photoId.links ? photoId.urls['regular'] : '' } className="img-fluid"></img>
                <div class="d-flex" style={{background:'#fff'}}>
                  <ul style={{width:'100%'}}>
                    <li className="d-flex">
                      <div style={{width:150}}>make By :</div>
                      <div>{photoId.exif ? photoId.exif['make'] : ''}</div>
                    </li>
                    <li className="d-flex">
                      <div style={{width:150}}>model :</div>
                      <div></div>
                    </li>
                    <li className="d-flex">
                      <div style={{width:150}}>exposure_time :</div>
                      <div>{photoId.exif ? photoId.exif['exposure_time'] : ''}</div>
                    </li>
                    <li className="d-flex">
                      <div style={{width:150}}>aperture :</div>
                      <div>{photoId.exif ? photoId.exif['aperture'] : ''}</div>
                    </li>
                    <li className="d-flex">
                      <div style={{width:150}}>focal_length :</div>
                      <div>{photoId.exif ? photoId.exif['focal_length'] : ''}</div>
                    </li>  
                    <li className="d-flex">
                      <div style={{width:150}}>iso :</div>
                      <div>{photoId.exif ? photoId.exif['iso'] : ''}</div>
                    </li> 
                  </ul>   
                </div>
              </Col>
              <Col md={4}>
                  <h4>Related Images</h4>
                  {photoId.related_collections ? photoId.related_collections.results.map((related) => (
                      <div style={{padding:5,marginBottom:4,border:'1px solid #fff'}}>
                        <img src={related.cover_photo.urls['small']}  className="img-fluid"/>
                      </div>
                  )) : 'No related products' }
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}
export default Modalpop;