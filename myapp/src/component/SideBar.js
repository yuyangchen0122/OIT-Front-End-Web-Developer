import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';
import ListItemText from "@material-ui/core/ListItemText";


const drawerWidth = 240;

const styles = theme => ({
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
        marginLeft: 12,
        marginRight: 20,
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
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
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
});

class PersistentDrawerLeft extends React.Component {

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme, children}  = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            myRUTERS
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/HomePage">
                            <ListItemText primary="HomePage" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/AcademicSupport">
                            <ListItemText primary="Academic Support" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/ClassesDegree">
                            <ListItemText primary="Classes & Degree" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/ComputingServices">
                            <ListItemText primary="Computing Services" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/FinancialInformation">
                            <ListItemText primary="Financial Information" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/GradesRecords">
                            <ListItemText primary="Grades & Records" />
                        </ListItem>
                        <ListItem button component={Link} to="../pages/StudentLife">
                            <ListItemText primary="Student Life" />
                        </ListItem>
                        {/*{['My Favorites', 'Academic Support', 'Campus Sevices', 'Classes & Degree', 'Computing Services', 'Financial Information', 'Grades & Records', 'Student Life'].map((text, index) => (*/}
                            {/*<ListItem button component={Link}>*/}
                                {/*<ListItemIcon>{index % 7 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                {/*<ListItemText primary={text} />*/}
                            {/*</ListItem>*/}
                        {/*))}*/}
                    </List>
                    <Divider />
                    {/*<List>*/}
                        {/*{['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                            {/*<ListItem button key={text}>*/}
                                {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                {/*<ListItemText primary={text} />*/}
                            {/*</ListItem>*/}
                        {/*))}*/}
                    {/*</List>*/}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        {children}
                    </div>

                </main>
            </div>
        );
    }
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default compose(
    withRouter,
    withStyles(styles, { withTheme: true })
)(PersistentDrawerLeft);
