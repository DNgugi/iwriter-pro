import React from 'react';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Toolbar, Drawer, Typography, AppBar, List, ListItem, ListItemText, ListItemIcon, useTheme, makeStyles, CssBaseline, Divider, IconButton} from '@material-ui/core';

import {Home, Menu, RoomService, Business, AttachMoney,Settings,Face, LockOpen, ContactSupport } from '@material-ui/icons';

import AdminDash from "../admin-dash/AdminDash";
import  LandingPage from "../landing-page/LandingPage";

import {
  Switch,
  Route,
} from "react-router-dom";


import {
  Link
} from "react-router-dom";
import Footer from '../footer/Footer';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh'
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    

   
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            iWriter Pro
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
         <List>
       
          <Link to='/'>
          <ListItem button key='1'>
            <ListItemIcon className={classes.navIcon}> <Home /></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          </Link>
         
          <ListItem button key='2'>
            <ListItemIcon className={classes.navIcon}> <RoomService /></ListItemIcon>
            <ListItemText primary='Services' />
          </ListItem>
          
          <ListItem button key='3'>
            <ListItemIcon className={classes.navIcon}> <Business /></ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
         
          <ListItem button key='4'>
            <ListItemIcon className={classes.navIcon}> <AttachMoney /></ListItemIcon>
            <ListItemText primary='Pricing' />
          </ListItem>
       
          <ListItem button key='5'>
            <ListItemIcon className={classes.navIcon}> <Settings /></ListItemIcon>
            <ListItemText primary='Process' />
          </ListItem>
       
          <ListItem button key='6'>
            <ListItemIcon className={classes.navIcon}> <Face /></ListItemIcon>
            <ListItemText primary='Testimonials' />
          </ListItem>
      

      </List>
        <Divider />
       <List>

       <Link to='/admin'>
       <ListItem button key='6'>
            <ListItemIcon className={classes.navIcon}> <LockOpen /></ListItemIcon>
            <ListItemText primary='Login' />
          </ListItem>
       </Link>

          <ListItem button key='6'>
            <ListItemIcon className={classes.navIcon}> <ContactSupport /></ListItemIcon>
            <ListItemText primary='Contact Support' />
          </ListItem>
    </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/admin' component={AdminDash}/>
      </Switch>
        
      </main>
      {/* <Footer /> */}
    </div>
   
  );
}
