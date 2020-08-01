import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Tooltip } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  grow: {
    color: 'black',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
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
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
            <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
            <InfoIcon />
        </IconButton>
        <p>About Us</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          color="inherit"
        >
          <ContactMailIcon />
        </IconButton>
        <p>Contact Us</p>
      </MenuItem>
    </Menu>
  );

  const cities = ['Mumbai','Delhi','Kolkata','Chennai','Bangalore','Hyderabad','Ahmedabad','Pune','Surat','Jaipur','Kanpur','Lucknow','Nagpur',
  'Ghaziabad','Indore','Coimbatore','Kochi','Patna','Kozhikode','Bhopal','Thrissur','Vadodara','Agra','Visakhapatnam','Malappuram','Thiruvananthapuram','Kannur','Ludhiana','Nashik','Vijayawada'
    ,'Madurai','Varanasi','Meerut','Faridabad','Rajkot','Jamshedpur','Srinagar','Jabalpur','Asansol','Vasai-Virar'
    ,'Allahabad','Dhanbad','Aurangabad','Amritsar','Jodhpur','Ranchi','Raipur','Kollam','Gwalior','Bhilai','Chandigarh','Tiruchirappalli','Kota','Mysore','Bareilly','Tiruppur','Guwahati',
    'Solapur','Hubli-Dharwad','Salem','Aligarh','Gurugram','Moradabad','Bhubaneswar','Jalandhar','Warangal','Bhiwandi','Siliguri','Saharanpur','Gorakhpur',
    'Guntur','Cuttack','Puducherry','Amravati','Bikaner','Noida','Mangalore','Belagavi','Bhavnagar','Firozabad','Jamnagar','Durgapur','Malegaon','Bokaro',
    'Nellore','Kolhapur','Raurkela','Ajmer','Nanded','Jhansi',
    'Gulbarga','Erode','Ujjain','Sangli','Tirunelveli','Muzaffarnagar','Vellore','Kurnool']

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className="cloud-logo" variant="h6" noWrap>
            <CloudIcon/>
          </Typography>
          <div className="search-bar">
            <Autocomplete
            disableClearable
            options={cities.map((option) => option)}
            onChange={(event, value) => {
                props.setCity(value)
            }}
            renderInput={(params) => (
                <TextField
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    {...params}
                    placeholder="Search…"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ 
                        ...params.InputProps,
                        startAdornment: <InputAdornment position="start"> <SearchIcon /></InputAdornment>,
                        type: 'search' }}
                />
                )}
            />
         </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Home">
                <IconButton color="inherit">
                    <HomeIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="About Us">
                <IconButton color="inherit">
                    <InfoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Contact Us">
                <IconButton
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                <ContactMailIcon />
                </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
