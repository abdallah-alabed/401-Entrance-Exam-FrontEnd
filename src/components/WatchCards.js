import React, { Component } from "react";
import {Card,Row,Col,Button} from 'react-bootstrap'
const axios=require('axios');




class WatchCards extends Component {


    addFav=async (e)=>{
        axios.post(`${process.env.REACT_APP_BACKEND}/addWatch`,e);  
     }


     
  render() {
    console.log(this.props.watchData)
    return (
      <div>
          <Row > 
              {this.props.watchData.map(e=>{
                  return(<Col>
                    <Card style={{ width: "24rem" }}>
                    <Card.Img variant="top" src={e.image_url} />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>
                      Price: {e.toUSD} USD
                      </Card.Text>
                      <Card.Text>
                      Price: {e.description}
                      </Card.Text>
                      <Button variant="primary" onClick={(e)=>{this.addFav(e)}}>Add-To-list </Button>
                    </Card.Body>
                  </Card>
                  </Col>)
              })}
        </Row> 
      </div>
    );
  }
}

export default WatchCards;
