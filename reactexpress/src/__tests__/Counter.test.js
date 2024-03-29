import React from 'react';
import Provider from 'react-redux';
import Enzyme from 'enzyme';
import Counter from '../Counter';
import {connect} from 'react-redux';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import middlewares from 'redux';
const mockStore = configureMockStore(middlewares);


describe('Counter component', () => {
  it('should show the count value' , () => {
    const initialState = {
      count : 10
    }
    const onIncrementClick = jest.fn();
    const tree = shallow(<Counter.WrappedComponent count = {initialState.count} onIncrementClick = {onIncrementClick} />);
    expect(tree).toBeDefined();

    tree.find("#button").simulate('click');
    expect(onIncrementClick).toBeCalledTimes(1);
    expect(onIncrementClick).toBeCalledWith(initialState.count);
    // const store = mockStore(initialState);
    //  const tree = shallow(<Provider store={store}><Counter props={{count:4}}/></Provider>);
     // const spy = jest.spyOn(tree.)
     // expect(tree.type()).to.equal('div');
})

it('should show the name enter name in name field', () => {

  const initialState = {
    name :'Hi'
  }
  const onChangeName = jest.fn();

  const tree = shallow(<Counter.WrappedComponent name={initialState.name} onChangeName = {onChangeName} />);

  expect(tree).toBeDefined();

const event = {target : {value : 'the-value'}}
  tree.find('#name').simulate('change', event);
  expect(onChangeName).toBeCalledTimes(1);
  expect(onChangeName).toBeCalledWith(event.target.value);
 })
});
