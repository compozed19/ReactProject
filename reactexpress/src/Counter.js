import React from 'react';
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import {onIncrementClick} from './actions.js';

 export const Counter =(props) =>{
  console.log("props are ----",props);
  return(
    <div>
     <h1 id="h1">I am a counter!</h1>
     <p id="p">Count : {props.count}</p>
     <button id="button" onClick={() => props.onIncrementClick(props.count)}>Increment</button>
    </div>
  )}
  function mapStateToProps(state){
    return{
      count : state.count
    }
  }
function mapDispatchToProps(dispatch){
  return bindActionCreators({onIncrementClick}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
