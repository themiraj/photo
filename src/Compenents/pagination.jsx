import React,{Component} from 'react';
import { Pagination, } from 'react-bootstrap';
class Paginator extends React.Component{
    render(){
        const styles = {
            justifyContent:'center'
        }
        return(
            <Pagination style={styles}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        )
    }
}

export default Paginator;