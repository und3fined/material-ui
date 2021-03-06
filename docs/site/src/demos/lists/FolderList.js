// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui/svg-icons/folder';

const styleSheet = createStyleSheet('FolderList', (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}));

function FolderList(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <Avatar><FolderIcon /></Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2016" />
        </ListItem>
        <ListItem button>
          <Avatar><FolderIcon /></Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2016" />
        </ListItem>
      </List>
    </div>
  );
}

FolderList.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default FolderList;
