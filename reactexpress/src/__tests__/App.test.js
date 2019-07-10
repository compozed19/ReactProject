import React from 'react';
import Enzyme from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, mount } from 'enzyme';

let tree;

beforeEach(()=>{
  tree = shallow(<App />);
  const event = { preventDefault: () => {} };
  jest.spyOn(event,'preventDefault')
});

describe("home page rendering", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('onclick of input field, it should enter the name', () => {
    // const tree = shallow(<App/>);
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

xit('onclick of form should display data on screen',async () => {
     global.fetch = jest.fn().mockImplementation(() => Promise.resolve({name: 'name', value: 'Hello- World'}));
      // Promise.resolve({sgreeting: `Hello- World`}));
     // const spy = jest.spyOn(tree.instance(),'handleSubmit');
     const handleSubmit = jest.fn();
     const form = tree.find('#form');
     const event = {
       target : {name : 'name',value:'the-value'}
     };
     form.simulate('click',event);
     // await tree.instance().handleSubmit(event).then(response => {
     //    expect(response.name).toBe("skjgfjsdfj");
     // });
      expect(handleSubmit).toBeCalledTimes(1);
  })
})
