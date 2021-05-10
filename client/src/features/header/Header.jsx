import React from "react";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  Toolbar,
  Drawer,
  Typography,
  AppBar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  Divider,
  IconButton,
} from "@material-ui/core";

import {
  Menu,
  AttachMoney,
  //Face,
  LockOpen,
  ContactSupport,
  DoneAll,
  SwapVert,
  Info,
  BorderColor,
  HomeRounded,
} from "@material-ui/icons";

import { Link, NavLink, useRouteMatch } from "react-router-dom";

import headerStyles from "./headerStyles";
import Copyright from "../copyright/Copyright";
import Login from "../login/Login";
import { Switch, Route } from "react-router-dom";
import Hero from "../hero/Hero";
import Services from "../services/Services";
import About from "../about/About";
import Process from "../process/Process";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";
import AdminDash from "../admin-dash/AdminDash";
import { NavHashLink } from "react-router-hash-link";
import Home from "../home/Home";

export default function Header() {
  const classes = headerStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { url, path } = useRouteMatch();

  return (
    <div className={classes.root} id="header">
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavHashLink smooth to={"/#hero"}>
            <ListItem>
              <ListItemIcon>
                <HomeRounded />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavHashLink>
          <NavHashLink smooth to={"/#services"}>
            <ListItem>
              <ListItemIcon>
                {" "}
                <DoneAll />
              </ListItemIcon>
              <ListItemText>Services</ListItemText>
            </ListItem>
          </NavHashLink>
          <NavHashLink smooth to={"/#about"}>
            <ListItem>
              <ListItemIcon>
                {" "}
                <Info />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </NavHashLink>
          <NavHashLink smooth to={"/#process"}>
            <ListItem>
              <ListItemIcon>
                {" "}
                <SwapVert />
              </ListItemIcon>
              <ListItemText>Process</ListItemText>
            </ListItem>
          </NavHashLink>
          <NavHashLink smooth to={"/#pricing"}>
            <ListItem>
              <ListItemIcon>
                {" "}
                <AttachMoney />
              </ListItemIcon>
              <ListItemText>Pricing</ListItemText>
            </ListItem>
          </NavHashLink>
        </List>
        <Divider />
        <List>
          <NavLink to="/contact">
            <ListItem>
              <ListItemIcon>
                <ContactSupport />
              </ListItemIcon>
              <ListItemText>Contact Us</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/login">
            <ListItem>
              <ListItemIcon>
                <LockOpen />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
      </main>
    </div>
  );
}
