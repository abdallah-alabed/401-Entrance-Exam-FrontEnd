import React, { Component } from 'react'
import WatchCards from "./WatchCards"
const axios=require('axios');



class Home extends Component {

 constructor(props){
     super(props);

     this.state={
         watchData:[]
     }
 }

 componentDidMount=async ()=>{
    let watch= await axios.get(`${process.env.REACT_APP_BACKEND}/api`);
    this.setState({
        watchData:watch.data
    })
    // console.log(this.state.watchData)
 }

//  addFav=  (data)=>{
//  axios.post(`${process.env.REACT_APP_BACKEND}/addWatch`,data);     
//  }


    render() {
        return (
            <div>
              <WatchCards   watchData={this.state.watchData}/>  
            </div>
        )
    }
}

export default Home
