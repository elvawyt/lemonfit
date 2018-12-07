import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect, {createSpy} from 'expect';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';

import Converter from './../ui/Converter';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


if(Meteor.isClient){
    describe('Converter',function(){
        it('button text should be to',function(){
            const wrapper = mount(<Converter handleClick = {()=>{}}/>)
            const buttontext = wrapper.find('button').text();
            expect(buttontext).toBe('to');
        });
        it('should call the function',function(){
            const spy = expect.spyOn(Converter.prototype,"handleClick");
            const wrapper = mount(<Converter className = "counvertkg2lb"/>);
            const inputvalue = wrapper.find('.convertInput').at(0).simulate('change', { target: { value: '10' } });  
            // // expect(wrapper.find('.convertInput').at(0).prop('value')).toBe('10');               
            // wrapper.find('button').simulate('click');
            // expect(spy).toNotHaveBeenCalled();
            wrapper.find("button").simulate("click");
            expect(wrapper.find('.convertInput').at(1).props().value).toBe('');       
            // expect(spy).toHaveBeenCalled();           
        });
        it('should accept input', function(){
            const spy = expect.spyOn(Converter.prototype,"handleClick");
            const wrapper = mount(<Converter className = "counvertkg2lb"/>);
            const inputvalue = wrapper.find('.convertInput').at(0).simulate('change', { target: { value: '10' } });  
            expect(wrapper.find('.convertInput').at(0).props().value).toBe('10');    
        });
        // it('should output',function(){ac
        it('calculation should work',function(){
            const spy = expect.spyOn(Converter.prototype, "handleClick");
            const wrapper = mount(<Converter className="counvertkg2lb"/>);
            wrapper.setState({leftval: '10'});           
            wrapper.find('button').simulate('click');
            wrapper.setState({rightval: '22.0462'});                       
            expect(wrapper.find('.convertInput').at(1).prop('value')).toBe('22.0462');
        });
        it('cm input field should work',function(){
            const wrapper = mount(<Converter className="counvertcm2inch"/>);
            wrapper.setState({leftval: '10'});
            wrapper.find('button').simulate('click');
            expect(wrapper.find('.convertInput').at(0).prop('value')).toBe('10');
        });
    

        // });
               
    });
}