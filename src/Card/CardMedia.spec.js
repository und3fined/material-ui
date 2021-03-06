// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import CardMedia, { styleSheet } from './CardMedia';

describe('<CardMedia />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should have the cardMedia class', () => {
    const wrapper = shallow(
      <CardMedia />,
    );
    assert.strictEqual(wrapper.hasClass(classes.cardMedia), true);
  });
});
