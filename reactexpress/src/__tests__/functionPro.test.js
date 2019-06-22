import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import {shallow,mount} from 'enzyme';
// import {checkADGroups} from '../functionPro';
import FunctionPro from '../functionPro';

let tree;

describe('functionPro test', () => {
  it('checkADGroups render data', () => {
    let spy = jest.spyOn(FunctionPro.prototype,'checkADGroups');
    let spy2 = jest.spyOn(FunctionPro.prototype,'showRPData');
     tree = shallow(<FunctionPro />);
     let adGroups = ['tana_users','rp_users','rp_alc_users'];
     expect(spy).toBeCalled();
     expect(spy).toBeCalledWith(adGroups);
     expect(spy).toHaveBeenCalledTimes(1);
     expect(spy2).toBeCalled();
  })
  it('onclick of button, it will call clickMe', () => {
    let spy = jest.spyOn(FunctionPro.prototype,'clickMe');
    const wrapper = shallow(<FunctionPro />);

    wrapper.find('#myBtn').simulate('click','');
    expect(spy).toHaveBeenCalled();
  })
})
