import React, { useContext } from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    Divider,
    Typography,
} from "@material-ui/core";
import clsx from 'clsx';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwitchUI from "@material-ui/core/Switch";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { CustomThemeContext } from "../themes/provider/CustomThemeProvider";


const drawerWidth = 240;
const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1,
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

const Drawer = props => {
    const { history } = props;
    const classes = useStyles();
    const itemList = [
        {
            title: "Home",
            onClick: () => {
                history.push("/")
                setOpen(false)
            }
        },
        {
            title: "Test",
            onClick: () => {
                history.push("/test")
                setOpen(false)
            }
        }
    ];
    const { currentTheme, setTheme } = useContext(CustomThemeContext);
    const isDark = Boolean(currentTheme === "dark");

    const handleThemeChange = (event) => {
        const { checked } = event.target;
        if (checked) {
            setTheme("dark");
        } else {
            setTheme("normal");
        }
    };

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <AppBar position="fixed" color="primary" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        color="inherit"
                        onClick={handleDrawerOpen}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Knowledge base
                    </Typography>
                    <FormControlLabel
                        control={
                            <SwitchUI checked={isDark} onChange={handleThemeChange} />
                        }
                        label={currentTheme}
                    />
                </Toolbar>
            </AppBar>
            <MUIDrawer variant="temporary" className={classes.Drawer} open={open} classes={{paper:classes.drawerPaper}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemList.map((item, index) => {
                        const { title, onClick } = item;
                        return (
                            <ListItem button key={title} onClick={onClick}>
                                <ListItemText primary={title} />
                            </ListItem>
                        )
                    })}
                </List>
            </MUIDrawer>
        </div>
    )
}

export default withRouter(Drawer);