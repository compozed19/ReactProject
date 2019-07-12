import React,{Component} from 'react';
import {connect, Provider } from 'react-redux';
import {changeName} from './actions/formActions.js';
import {bindActionCreators} from 'redux';
import store from './store/index.js';



class Form extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
       <Provider store={store}>
        <div>
         <form>
          <p> Name : </p>  <input type="text" onChange={(e) => changeName(e.target.value)} />

        </form>
        </div>
      </Provider>
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

export default connect(mapStateToProps,mapStateToProps)(Form);
