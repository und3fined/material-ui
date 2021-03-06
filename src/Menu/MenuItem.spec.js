// @flow weak
/* eslint-env mocha */
import React from 'react';
import { assert } from 'chai';
import { spy } from 'sinon';
import { createShallowWithContext } from 'test/utils';
import MenuItem, { styleSheet } from './MenuItem';

describe('<MenuItem />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a button ListItem with no ripple', () => {
    const wrapper = shallow(
      <MenuItem />,
    );
    assert.strictEqual(wrapper.is('ListItem'), true, 'should be a ListItem');
    assert.strictEqual(wrapper.prop('button'), true, 'should have the button prop');
    assert.strictEqual(wrapper.prop('ripple'), false, 'should not have a ripple');
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<MenuItem className="woof" />);
    assert.strictEqual(wrapper.hasClass('woof'), true, 'should have the "woof" class');
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
  });

  it('should render with the selected class', () => {
    const wrapper = shallow(<MenuItem selected />);
    assert.strictEqual(wrapper.hasClass(classes.selected), true, 'should have the selected class');
  });

  it('should have a default role of menuitem', () => {
    const wrapper = shallow(<MenuItem />);
    assert.strictEqual(wrapper.prop('role'), 'menuitem', 'should have the menuitem role');
  });

  it('should have a role of option', () => {
    const wrapper = shallow(<MenuItem role="option" />);
    assert.strictEqual(wrapper.prop('role'), 'option', 'should have the option role');
  });

  it('should have a tabIndex of -1 by default', () => {
    const wrapper = shallow(<MenuItem />);
    assert.strictEqual(wrapper.prop('tabIndex'), '-1', 'should have a -1 tabIndex');
  });

  describe('event callbacks', () => {
    it('should fire event callbacks', () => {
      const events = [
        'onClick',
        'onFocus',
        'onBlur',
        'onKeyUp',
        'onKeyDown',
        'onMouseDown',
        'onMouseLeave',
        'onMouseUp',
        'onTouchEnd',
        'onTouchStart',
      ];

      const handlers = events.reduce((result, n) => {
        result[n] = spy();
        return result;
      }, {});

      const wrapper = shallow(<MenuItem {...handlers} />);

      events.forEach((n) => {
        const event = n.charAt(2).toLowerCase() + n.slice(3);
        wrapper.simulate(event, { persist: () => {} });
        assert.strictEqual(handlers[n].callCount, 1, `should have called the ${n} handler`);
      });
    });
  });
});
