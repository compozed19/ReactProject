import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeName} from './actions/formActions.js';
import {bindActionCreators} from 'redux';


class Form extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <form>
       <p> Name : </p>  <input type="text" onChange={(e) => this.props.changeName(e.target.value)} />
      </form>
      </div>
    )}
}

function  mapStateToProps(state){
  return {
      userName : state.userName
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({changeName},dispatch);
}

export default connect(mapStateToProps,null)(Form);
