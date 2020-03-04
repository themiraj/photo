import React,{Component} from 'react';
import { Col,Card,Container,Row,Badge,Button } from 'react-bootstrap';
import axios from 'axios';
import Modalpop from './Modals'
import CardCol from './Card'
import Navigation from './Navbar'
import Paginator from './pagination'
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
            console.log(res)
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

    search = (event) =>{
        let searchValue = event.target.value

        axios.get(process.env.REACT_APP_API_URL + 'search/photos?page=1&query='+ searchValue +'&client_id=' + process.env.REACT_APP_API_KEY)
        .then((res) => {
            console.log(res)
            this.setState({
                data:res.data.results,
            })
        })        
    }

    closeModal=(close)=>{
        this.setState({popopen:close})
    }
    render(){ 
        console.log(this.state.data)
        return(
            <div>
                

                
                <Navigation search={this.search}/>
                <Container style={{paddingTop:30}} fluid="lg">
                    <Row>
                        <Col md={3}>
                            <div>
                                <div className="profile-thumb">
                                    <img src="https://source.unsplash.com/random/150x150" alt=""/>
                                    <h3>Mohd Mirah=j</h3>
                                </div>
                                <div className="profile-detail">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={9}>
                        <Row>
                            {this.state.data.map((photos) => (
                                <CardCol  key={photos.id} ClickHanlder={this.clickHanlder} imageUrl={ photos.urls['small']} dessciption={photos.alt_description} keyes={photos.id}  download={photos.links['self']}/>
                            ))}
                        </Row>
                        {this.state.popopen &&
                        <Modalpop photoId={this.state.SingleDetails}  open={this.state.popopen} closeModal={this.closeModal}/>
                        }
                        <Paginator/>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Cards;