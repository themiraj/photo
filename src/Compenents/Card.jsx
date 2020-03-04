import React,{Component} from 'react';
import { Col,Card, Container,Row,Badge,Button } from 'react-bootstrap';
import axios from 'axios'
const {Img,Body} = Card;
class CardCol extends React.Component{
    render(){
        const {keyes,imageUrl,download,ClickHanlder} = this.props;
        return(
            <Col md={3} key={keyes} style={{marginBottom:30}}>
                <Card>
                    <Card.Img variant="top" src={imageUrl} style={{height:200,objectFit:'cover'}}/>
                    <Card.Body>
                        <Button id={keyes} onClick={ClickHanlder} variant="outline-info" size="sm">SeeFull Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default CardCol;