import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count :0,
  nameInfo : 'Hi',
  userName : ''
};
const reducer = (state = initialState, action) =>{
  console.log("userName is-----",action.userName);
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
console.log("store is------",store.getState());

export default store;
