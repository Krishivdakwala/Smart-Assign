import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import { getStudentData } from "../api";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import { TrophyFill, Calendar2WeekFill } from 'react-bootstrap-icons';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    overflow: 'hidden',
  },
  drawerContainer: {
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navBar: {
    width: '100%',
    alignItems: 'stretch',
    paddingBottom: 0,
    fontSize: '20px',
  },
  listItem: {
    paddingTop: '20px',
    paddingBottom: '20px',
    fontSize: '20px',
  },
}));

function LeftDrawer() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [studentData, setStudentData] = useState({});

  const getStudent = () => {
    getStudentData(currentUser.email)
      .then((data) => {
        setStudentData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Navbar className={classes.navBar} variant="dark" >
            <Navbar.Brand href="/dashboard">Luokossa</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#class">Class</Nav.Link>
            <Nav.Link href="#assignments">Assignments</Nav.Link>
            <Nav.Link href="#notebook">Notebook</Nav.Link>
            <Nav.Link href="#people">People</Nav.Link>
            <Nav.Link href="#calendar">Calendar</Nav.Link>
            </Nav>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              <Link to="/dashboard/profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
          </Navbar>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
              <ListItem className={classes.listItem}>
                <Calendar2WeekFill />
                <ListItemText primary="&ensp;Time Table"/>
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="&ensp;SST" secondary="9:00 AM - 10:00 AM" />
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="&ensp;Science" secondary="10:00 AM - 11:00 AM" />
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="&ensp;Break" secondary="11:00 AM - 12:00 PM" />
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="&ensp;Music" secondary="12:00 PM - 01:00 PM" />
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="&ensp;Maths" secondary="01:00 PM - 02:00 PM" />
              </ListItem>
              <Divider /> 
          </List>
        </div>
      </Drawer>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
              <ListItem className={classes.listItem}>
                <TrophyFill />
                <ListItemText primary="&ensp;Leaderboards"/>
              </ListItem>
              <Divider />




          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}

export default LeftDrawer;