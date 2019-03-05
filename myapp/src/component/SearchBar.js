import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Grid from './AppLayout';
import InputBase from "@material-ui/core/InputBase";

import PrimaryAppBar from './Header'
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        marginTop: 75,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },

    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 3,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 1200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
});

class PersistentDrawerLeft extends React.Component {
    state = {
        open: false
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
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
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />
                        <Grid/>
                </main>
            </div>
        );
    }
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import InputBase from "@material-ui/core/InputBase";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import { withStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import MailIcon from "@material-ui/icons/Mail";
// import Drawer from '@material-ui/core/Drawer';
// import classNames from 'classnames';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
//
//
// const drawerWidth = 240;
//
// const styles = theme => ({
//     root: {
//         width: "100%",
//     },
//     grow: {
//         flexGrow: 1
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20
//     },
//     title: {
//         display: "none",
//         [theme.breakpoints.up("sm")]: {
//             display: "block"
//         }
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
//     search: {
//         position: "relative",
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         "&:hover": {
//             backgroundColor: fade(theme.palette.common.white, 0.25)
//         },
//         marginRight: theme.spacing.unit * 2,
//         marginLeft: 0,
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: theme.spacing.unit * 3,
//             width: "auto"
//         }
//     },
//     searchIcon: {
//         width: theme.spacing.unit * 9,
//         height: "100%",
//         position: "absolute",
//         pointerEvents: "none",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     inputRoot: {
//         color: "inherit",
//         width: "100%"
//     },
//     inputInput: {
//         paddingTop: theme.spacing.unit,
//         paddingRight: theme.spacing.unit,
//         paddingBottom: theme.spacing.unit,
//         paddingLeft: theme.spacing.unit * 10,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("md")]: {
//             width: 1200
//         }
//     },
//     sectionDesktop: {
//         display: "none",
//         [theme.breakpoints.up("md")]: {
//             display: "flex"
//         }
//     },
//     sectionMobile: {
//         display: "flex",
//         [theme.breakpoints.up("md")]: {
//             display: "none"
//         }
//     }
// });
//
// class SearchBar extends React.Component {
//     state = {
//         anchorEl: null,
//         mobileMoreAnchorEl: null,
//         open: false,
//     };
//
//     handleDrawerOpen = () => {
//         this.setState({ open: true });
//     };
//
//     handleDrawerClose = () => {
//         this.setState({ open: false });
//     };
//
//     handleProfileMenuOpen = event => {
//         this.setState({ anchorEl: event.currentTarget });
//     };
//
//     handleMenuClose = () => {
//         this.setState({ anchorEl: null });
//         this.handleMobileMenuClose();
//     };
//
//     handleMobileMenuOpen = event => {
//         this.setState({ mobileMoreAnchorEl: event.currentTarget });
//     };
//
//     handleMobileMenuClose = () => {
//         this.setState({ mobileMoreAnchorEl: null });
//     };
//
//     render() {
//         const { anchorEl, mobileMoreAnchorEl, open } = this.state;
//         const { classes, theme } = this.props;
//         const isMenuOpen = Boolean(anchorEl);
//         const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//
//         return (
//             <div className={classes.root}>
//                 <AppBar position="static" color={'white'}>
//                     <Toolbar>
//                         <IconButton
//                             className={classes.menuButton}
//                             color="inherit"
//                             aria-label="Open drawer"
//                             onClick={this.handleDrawerOpen}
//                             className={classNames(classes.menuButton, open && classes.hide)}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Drawer
//                             className={classes.drawer}
//                             variant="persistent"
//                             anchor="left"
//                             open={open}
//                             classes={{
//                                 paper: classes.drawerPaper,
//                             }}
//                         >
//                             <div className={classes.drawerHeader}>
//                                 <IconButton onClick={this.handleDrawerClose}>
//                                     {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                                 </IconButton>
//                             </div>
//                             <Divider />
//                             <List>
//                                 {['Academic Support', 'Campus Sevices', 'Classes & Degree', 'Computing Services', 'Financial Information', 'Grades & Records', 'Student Life'].map((text, index) => (
//                                     <ListItem button key={text}>
//                                         <ListItemText primary={text} />
//                                     </ListItem>
//                                 ))}
//                             </List>
//                             <Divider />
//                             <List>
//                                 {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                                     <ListItem button key={text}>
//                                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                         <ListItemText primary={text} />
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         </Drawer>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 placeholder="Search…"
//                                 classes={{
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput
//                                 }}
//                             />
//                         </div>
//                         <div className={classes.grow} />
//                         <div className={classes.sectionDesktop} />
//                         <div className={classes.sectionMobile} />
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         );
//     }
// }
//
// SearchBar.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles, { withTheme: true })(SearchBar);
