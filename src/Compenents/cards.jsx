import React,{Component} from 'react';
import { Col,Card,Container,Row,Badge,Button } from 'react-bootstrap';
import axios from 'axios';
const {Img,Body} = Card;
class CardDetails extends React.Component{
    render(){
        const {id,imageUrl,clickEvelt} = this.props;
        return(
            <Col md={3} key={id} style={{marginBottom:30}}>
                <Card>
                    <Img variant="top" src={imageUrl} style={{height:200,objectFit:'cover'}}/>
                    <Body>
                        <a href={this.getBase64FromUrl} download><Button variant="success" onClick={clickEvelt}>Download</Button></a>
                    </Body>
                </Card>
            </Col>
        )
    }
}
class Cards extends React.Component{
    state = {
        data: [],
        id:null,
        downloadImage:[]
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + '/photos/?client_id=' + process.env.REACT_APP_API_KEY )
        .then((res) => {
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }
    ShowImageFullDetail = (event) => {
       
    }
    render(){
        return(
            <Container>
                <Row>
                    {this.state.data.map((photos) => (
                        <CardDetails imageUrl={ photos.urls['small']} key={photos.id} clickEvelt={this.ShowImageFullDetail}/>
                    ))}
                </Row>
            </Container>
        )
    }

}
export default Cards;