import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect, {createSpy} from 'expect';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';

import Calculator from './../ui/Calculator';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


if(Meteor.isClient){
    describe('Calculator',function(){
        it('input filed should be seven',function(){
            const wrapper = mount(<Calculator/>)
            const inputnum = wrapper.find('input').length;
            expect(inputnum).toBe(7);
        });
        it('should call the function',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);
            // wrapper.setState({weight: '10'});  
            wrapper.find('input').at(0).simulate('change', { target: { value: '10' } });  
            
            expect(wrapper.find('input').at(0).prop('value')).toBe('10');          
        });
        it('weight field should work',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);            
            expect(wrapper.find('input').at(0).prop('id')).toBe('weight');          
        });

        it('height should work',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);
            // wrapper.setState({weight: '10'});  
            wrapper.find('input').at(1).simulate('change', { target: { value: '10' } });  
            
            expect(wrapper.find('input').at(1).prop('id')).toBe('height');          
        });

        it('age should work',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);
            // wrapper.setState({weight: '10'});  
            wrapper.find('input').at(2).simulate('change', { target: { value: '10' } });  
            
            expect(wrapper.find('input').at(2).prop('id')).toBe('age');          
        });

        it('click should work',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);
            const spy = expect.spyOn(Calculator.prototype, "handleSubmit");                   
            wrapper.find('input').at(5).simulate('click');
            expect(spy).toHaveBeenCalled();
            
                      
        });
        it('clear should work',function(){
            // const spy = expect.spyOn(Calculator.prototype,"handleSubmit");
            const wrapper = shallow(<Calculator handleWeightChange={()=> {}}
            handleHeightChange={()=>{}}
            handleMaleChange={()=>{}}
            handleFemaleChange={()=>{}}
            />);
            const spy = expect.spyOn(Calculator.prototype, "handleSubmit");                   
            wrapper.find('input').at(5).simulate('click');
            // expect(spy).toHaveBeenCalled();
            
                      
        });
       
    

        // });
               
    });
}