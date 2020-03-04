import React,{Component} from 'react';
import { Col,Card,Container,Row,Badge,Button } from 'react-bootstrap';
import axios from 'axios';
import Modalpop from './Modals'
import CardCol from './Card'
const {Img,Body} = Card;
class Cards extends React.Component{
    state = {
        data: [],
        popData:'null',
        popopen:false,
        SingleDetails:[]
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + '/photos/?client_id=' + process.env.REACT_APP_API_KEY )
        .then((res) => {
            this.setState({
                data:res.data,
            })
        })
    }
    clickHanlder = (event) => {
        let targetData = event.target.id;
        axios.get(process.env.REACT_APP_API_URL + '/photos/'+ targetData +'/?client_id=' + process.env.REACT_APP_API_KEY )
        .then((res) =>{
            this.setState({
                popData:targetData,
                SingleDetails:res.data,
                popopen:true
            })
        })
    };

    closeModal=(close)=>{
        this.setState({popopen:close})
    }
    render(){ 
        return(
            <Container style={{paddingTop:30}}>
                <Row>
                    {this.state.data.map((photos) => (
                        <CardCol  key={photos.id} ClickHanlder={this.clickHanlder} imageUrl={ photos.urls['small']} keyes={photos.id}  download={photos.links['self']}/>
                    ))}
                </Row>
                {this.state.popopen &&
                <Modalpop photoId={this.state.SingleDetails} open={this.state.popopen} closeModal={this.closeModal}/>
                 }
            </Container>
        )
    }

}
export default Cards;