import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import UsersIcon from '@material-ui/icons/People';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function UsersMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <UsersIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText primary="All Users" />
          </ListItem>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText primary="Writers" />
          </ListItem>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText primary="Clients" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
