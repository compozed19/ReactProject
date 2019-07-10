import React from 'react';
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import {onIncrementClick} from './actions/action.js';
import {onChangeName} from './actions/action.js';

 export const Counter =(props) =>{
  return(
    <div>
     <h1 id="h1">I am a counter!</h1>
     <p id="p">Count : {props.count}</p>
     <button id="button" onClick={() => props.onIncrementClick(props.count)}>Increment</button><br/> <br/>
      <p> Name : </p>
    <input id="name" type="text" onChange={(e) => props.onChangeName(e.target.value)}/> <br/><br/>

    <p> Updated name : {props.nameInfo} </p>

    </div>
  )}
  function mapStateToProps(state){
    return {
      count : state.count,
      nameInfo : state.nameInfo
    }
  }
  function mapDispatchToProps(dispatch){
  return bindActionCreators({onIncrementClick,onChangeName}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
