// @flow weak

import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { createStyleSheet } from 'jss-theme-reactor';
import Layout from 'material-ui/Layout';

const styleSheet = createStyleSheet('AutoLayout', () => ({
  root: {
    width: 400,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
}));

export default function AutoLayout(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div className={classes.root}>
      <Layout container gutter={24}>
        <Layout item xs>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Layout>
        <Layout item xs>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Layout>
        <Layout item xs>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Layout>
      </Layout>
      <Layout container gutter={24}>
        <Layout item xs>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Layout>
        <Layout item xs={6}>
          <Paper className={classes.paper}>
            xs=6
          </Paper>
        </Layout>
        <Layout item xs>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Layout>
      </Layout>
    </div>
  );
}

AutoLayout.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
