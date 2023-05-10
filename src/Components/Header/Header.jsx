import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import logo from '../../images/react-logo.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App';
import CustomButton from '../../common-components/CustomButton/CustomButton';


const pages = [{component:'Demos',id:'#demos'},{component:'Home',id:'#home'},{component:'Works',id:'#works'},{component:'Service',id:'#service'},{component:'Customers',id:'#customers'},{component:'Contact',id:'#contact'}];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const value = useContext(ThemeContext);

     const toggle = () =>
  {
    console.log(value)
    value.setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


 

  return (
  
    <div className='header'>
    <AppBar position="static" className='app-bar'>
      <Container className='header-container' maxWidth="xl" >
        <Toolbar disableGutters>
          <img src={logo} alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'var(--color)',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='var(--color)'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.component}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className='navtabs-button'
                href={page.id}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'var(--color)', display: 'block', fontSize: '14px' ,fontWeight:'bold'}}
              >
                {page.component}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 , display:'flex',alignItems:'center'}}>
              <CustomButton id='header-button1' name='login' style='login'/>
              <CustomButton id='header-button2' name='signup' style='sign-up'/>
              <span className='theme'> {value.theme} Mode</span>
              <Switch onClick={toggle} inputProps={{ 'aria-label': 'controlled' }}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  
  )
}
