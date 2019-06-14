import React from 'react';
import Enzyme from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, mount } from 'enzyme';

describe("home page rendering", () => {
  const event = { preventDefault: () => {} };
  beforeEach(()=>{
    jest.spyOn(event,'preventDefault')
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it.only('onclick of submit button, it should display the name', () => {
    const tree = shallow(<App/>);
    const spy = jest.spyOn(tree.instance(),'handleChange');

    const input = tree.find('#inputField');
    const event = {
      target : {name : 'name',value:'the-value'}
    };
     input.simulate('change',event);
     tree.instance().handleChange(event);

     expect(spy).toHaveBeenCalledTimes(1);
     expect(spy).toHaveBeenCalledWith(event);
     expect(tree.state().name).toEqual("the-value");
})
})
