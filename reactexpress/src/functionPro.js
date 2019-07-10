
import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class functionPro extends Component{
  constructor(props){
    super(props);
    this.state={
      role:'AGENT/STAFF',
      adGroups:['tana_users','rp_users','rp_alc_users']
    }
    this.checkADGroups = this.checkADGroups.bind(this);
    this.showRPData = this.showRPData.bind(this);
    this.showALCData = this.showALCData.bind(this);
    this.showRPALCData = this.showRPALCData.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }
   showRPData(){
     return (<div><h1>RP DATA</h1></div>);
   }
   showALCData(){
     return (<div><h1>ALC DATA</h1></div>);
   }

   showRPALCData(){
     return(<div><h1>RP ALC DATA </h1></div>);
   }
  checkADGroups(groups){
    if(groups.includes('tana_users')){
      return this.showRPData();
    } else{
       return this.showALCData();
    }
  }
  clickMe(){
    return(<div><h1>I am clicked now </h1></div>);
  }

  render(){
    return(
      <div>
       <h1> This is my function Programming </h1>
       {this.state.role !='' ? this.checkADGroups(this.state.adGroups) : this.showRPALCData()}

       <div>
        <button id="myBtn" onClick={this.clickMe}>Click Me!</button>
       </div>
      </div>

    )
  }
}
export default functionPro;
