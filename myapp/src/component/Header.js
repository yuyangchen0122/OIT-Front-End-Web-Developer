import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        width: '100%',
        color: 'white',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class PrimaryAppBar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        campus: '',
        campus_open: false,
        role: '',
        role_open: false,
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleCampusChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCampusClose = () => {
        this.setState({ campus_open: false });
    };

    handleCampusOpen = () => {
        this.setState({ campus_open: true });
    };

    handleRoleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleRoleClose = () => {
        this.setState({ role_open: false });
    };

    handleRoleOpen = () => {
        this.setState({ role_open: true });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>

        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                {/*<MenuItem onClick={this.handleMobileMenuOpen}>*/}
                    {/*<IconButton color="inherit">*/}
                        {/*<Badge badgeContent={4} color="secondary">*/}
                            {/*<MailIcon />*/}
                        {/*</Badge>*/}
                    {/*</IconButton>*/}
                    {/*<p>Messages</p>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem onClick={this.handleMobileMenuOpen}>*/}
                    {/*<IconButton color="inherit">*/}
                        {/*<Badge badgeContent={11} color="secondary">*/}
                            {/*<NotificationsIcon />*/}
                        {/*</Badge>*/}
                    {/*</IconButton>*/}
                    {/*<p>Notifications</p>*/}
                {/*</MenuItem>*/}

                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            myApp
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                            {/*<IconButton color="inherit">*/}
                                {/*<Badge badgeContent={4} color="secondary">*/}
                                    {/*<MailIcon />*/}
                                {/*</Badge>*/}
                            {/*</IconButton>*/}
                            {/*<IconButton color="inherit">*/}
                                {/*<Badge badgeContent={17} color="secondary">*/}
                                    {/*<NotificationsIcon />*/}
                                {/*</Badge>*/}
                            {/*</IconButton>*/}
                            <form autoComplete="off">
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="demo-controlled-open-select">Campus</InputLabel>
                                    <Select
                                        open={this.state.campus_open}
                                        onClose={this.handleCampusClose}
                                        onOpen={this.handleCampusOpen}
                                        value={this.state.campus}
                                        onChange={this.handleCampusChange}
                                        inputProps={{
                                            name: "campus",
                                            id: "demo-controlled-open-select"
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>New Brunswick</MenuItem>
                                        <MenuItem value={2}>Newark</MenuItem>
                                        <MenuItem value={3}>Camden</MenuItem>
                                        <MenuItem value={4}>RBHS</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                            <form autoComplete="off">
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="demo-controlled-role-open-select">Role</InputLabel>
                                    <Select
                                        open={this.state.role_open}
                                        onClose={this.handleRoleClose}
                                        onOpen={this.handleRoleOpen}
                                        value={this.state.role}
                                        onChange={this.handleRoleChange}
                                        inputProps={{
                                            name: "role",
                                            id: "demo-controlled-role-open-select"
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Student</MenuItem>
                                        <MenuItem value={2}>Faculty</MenuItem>
                                        <MenuItem value={3}>Staff</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

PrimaryAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryAppBar);
