// import { Factory } from 'meteor/dburles:factory';
// import React from 'react';
// import { shallow } from 'enzyme';
// import chai from 'chai';
// import Converter from './../ui/Converter';

// describe('TodoItem', () => {
//   it('should render', () => {
//     const todo = Factory.build('todo', { text: 'testing', checked: false });
//     const item = shallow(  <Converter
//         left={left}
//         right={right}
//     />);
//     chai.assert(item.hasClass('list-item'));
//     chai.assert(!item.hasClass('checked'));
//     chai.assert.equal(item.find('.editing').length, 0);
//     chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
//   });
// });