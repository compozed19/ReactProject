import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count :0,
  name: 'Hi'
};
const reducer = (state = initialState, action) =>{
  console.log('reducer running---',action);
  switch(action.type){
    case 'INCREMENT' :
         return Object.assign({}, state, {count : action.count});
    case 'NAME' :
         return Object.asign({}, state,{name : action.name});
   default :
   return state;
  }
}
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
