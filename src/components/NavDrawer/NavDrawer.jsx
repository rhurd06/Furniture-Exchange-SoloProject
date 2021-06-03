import { Divider, IconButton, List, ListItem, ListItemText, Toolbar, makeStyles, useTheme } 
    from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import SellIcon from '@material-ui/icons/Sell';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CollectionsIcon from '@material-ui/icons/Collections';
// import ViewComfyIcon from '@material-ui/icons/ViewComfy';

import clsx from 'clsx';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const drawerWidth = 240;

function navDrawer() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
          },
          appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        menuButton: {
            marginRight: theme.spacing(2),
          },
          hide: {
            display: 'none',
          },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
          },
          contentShift: {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          },
        }));

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const user = useSelector((store) => store.user);
        let loginLinkData = {
            path: '/login',
            text: 'Login / Register',
        };
        if (user.id != null) {
            loginLinkData.path = '/user';
            loginLinkData.text = 'Home';
        }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuItems = [
        {
            text: 'Home',
            path: '/home'
        },
        {
            text: 'Info Page',
            path: '/info'
        },
        {
            text: 'Browse Furniture',
            path: '/browseFurniture'
        },
        {
            text: 'Sell Furniture Form',
            path: '/sellFurniture'
        },
        {
            text: 'View My Items',
            path: '/myItems'
        },
        {
            text: 'View My Favorites',
            path: '/myFavorites'
        }
    ];

    return(
        <div>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Menu
                </Typography>
            </Toolbar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{paper: classes.drawerPaper, }}
            >
                <div className={classes.drawerHeader} >
                    <IconButton onClick={handleDrawerClose} >
                        { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                    </IconButton>
                </div>
                <Divider />
                <List color="secondary">
                    {menuItems.map((item, index) => (
                        <ListItem button key={item.text}
                            onClick={() => history.push(item.path)}
                        >
                            <ListItemText color="primary">{item.text}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem>
                        <LogOutButton />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default navDrawer;