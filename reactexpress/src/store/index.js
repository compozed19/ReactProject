import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count :0,
  nameInfo : 'Hi',
  userName : ''
};
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case 'INCREMENT' :
         return Object.assign({}, state, {count : action.count});
  case 'NAME' :
        return Object.assign({}, state, {nameInfo : action.nameInfo});
  case 'ENTER_NAME':
        return Object.assign({},state,{userName : action.userName});
   default :
   return state;
  }
}
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
