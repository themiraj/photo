import React,{Component} from 'react';
import { Col,Card,Container,Row,Badge,Button } from 'react-bootstrap';
import axios from 'axios';
import Modalpop from './Modals'
const {Img,Body} = Card;
class CardDetails extends React.Component{
    ShowImageFullDetail = (event) => {
        axios.get(process.env.REACT_APP_API_URL + 'photos/' +this.props.keyes + '/?client_id=' + process.env.REACT_APP_API_KEY)
          .then((resp) => {
            console.log(resp)
     })
    }
    render(){
        const {id,imageUrl,clickEvelt,download} = this.props;
        return(
          <div>
            <Col md={3} key={id} style={{marginBottom:30}}>
                <Card>
                    <Img variant="top" src={imageUrl} style={{height:200,objectFit:'cover'}}/>
                    <Body>
                        <a ><Button variant="success" onClick={this.ShowImageFullDetail}>Download</Button></a>
                    </Body>
                </Card>
            </Col>
          </div>
        )
    }
}
class Cards extends React.Component{
    state = {
        data: [],
        id:null,
        downloadImage:[],
        popData:[]
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
    render(){
        return(
            <Container>
                <Row>
                    {this.state.data.map((photos) => (
                        <CardDetails  key={photos.id} imageUrl={ photos.urls['small']} keyes={photos.id}  download={photos.links['self']}/>
                    ))}
                </Row>
                <Modalpop/>
            </Container>
        )
    }

}
export default Cards;