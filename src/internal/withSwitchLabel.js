// @flow weak
/* eslint-disable jsx-a11y/label-has-for */

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import createHelper from 'recompose/createHelper';
import classNames from 'classnames';

export const styleSheet = createStyleSheet('SwitchLabel', (theme) => {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: 16, // used for row presentation of radio/checkbox
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
    },
  };
});

function withSwitchLabel(SwitchComponent) {
  return class SwitchLabel extends Component {
    static propTypes = {
      /**
       * If `true`, the control will be disabled.
       */
      disabled: PropTypes.bool,
      /**
       * The text to be used in an enclosing label element.
       */
      label: PropTypes.node,
      /**
       * The className to be used in an enclosing label element.
       */
      labelClassName: PropTypes.string,
    };

    static contextTypes = {
      styleManager: PropTypes.object.isRequired,
    };

    switch = undefined;

    focus() {
      if (this.switch && this.switch.focus) {
        this.switch.focus();
      }
    }

    render() {
      const {
        disabled,
        label,
        labelClassName: labelClassNameProp,
        ...other
      } = this.props;

      const classes = this.context.styleManager.render(styleSheet);

      const labelClassName = classNames(classes.root, {
        [classes.hasLabel]: label && label.length,
      }, labelClassNameProp);

      const switchElement = (
        <SwitchComponent
          ref={(c) => { this.switch = c; }}
          disabled={disabled}
          {...other}
        />
      );

      if (!label) {
        return switchElement;
      }

      return (
        <label className={labelClassName}>
          {switchElement}
          <span className={disabled ? classes.disabled : ''}>
            {label}
          </span>
        </label>
      );
    }
  };
}

export default createHelper(withSwitchLabel, 'withSwitchLabel', true, true);
