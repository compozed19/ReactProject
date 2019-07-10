import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import {shallow,mount} from 'enzyme';
// import {checkADGroups} from '../functionPro';
import FunctionPro from '../functionPro';

let tree;

describe('functionPro test', () => {
  xit('checkADGroups render data', () => {
     tree = shallow(<FunctionPro />);

     let spy = jest.spyOn(tree.instance(),'checkADGroups');
     let spy2 = jest.spyOn(tree.instance(),'showRPData');
     let adGroups = ['tana_users','rp_users','rp_alc_users'];
     expect(spy).toBeCalled();
     expect(spy).toBeCalledWith(adGroups);
     expect(spy).toHaveBeenCalledTimes(1);
     expect(spy2).toBeCalled();
  })
  xit('onclick of button, it will call clickMe', () => {
    const wrapper = shallow(<FunctionPro />);

    // let spy = jest.spyOn(wrapper.instance(),'clickMe');

    let clickMe = jest.fn();

    wrapper.find('#myBtn').simulate('click');
    expect(clickMe).toBeCalledTimes(1);
  })
})
