import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';
import {mount} from 'enzyme';
import Converter from './../ui/Converter';
Enzyme.configure({ adapter: new Adapter() });


if(Meteor.isClient){
    describe('Converter',function(){
        it('button text should be to',function(){
            const wrapper = mount(<Converter/>)
            const buttontext = wrapper.find('button').text();
            expect(buttontext).toBe('to');
        });
        it('should call the function',function(){
            const spy = expect.createSpy();
        });
    });
}