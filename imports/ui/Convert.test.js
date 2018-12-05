import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect, {createSpy} from 'expect';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';
import {mount} from 'enzyme';
import Converter from './../ui/Converter';
import sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });


if(Meteor.isClient){
    describe('Converter',function(){
        it('button text should be to',function(){
            const wrapper = mount(<Converter handleClick = {()=>{}}/>)
            const buttontext = wrapper.find('button').text();
            expect(buttontext).toBe('to');
        });
        it('should call the function',function(){
            const spy = expect.createSpy();
            const wrapper = mount(<Converter handleClick = {spy}/>);
            wrapper.find('button').simulate("click");      
            expect(spy).toHaveBeenCalled();

    
        });
        
    });
}