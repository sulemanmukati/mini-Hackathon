// import { useState, useEffect } from 'react';
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { useNavigate, useLocation } from 'react-router-dom';

// const initialNavigation = [
//   { name: 'Home', href: '/home', current: true },  // Home is true by default
//   { name: 'About', href: '/about', current: false },
//   { name: 'Videos', href: '/videos', current: false },
//   { name: 'Library', href: '/library', current: false },
//   { name: 'Contact', href: '/contact', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Header() {
//   const [navigation, setNavigation] = useState(initialNavigation);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Update the current route in the navigation array
//   useEffect(() => {
//     setNavigation((prevNavigation) =>
//       prevNavigation.map((item) => ({
//         ...item,
//         // Set "Home" to true only if the pathname is exactly "/"
//         current: location.pathname === item.href,
//       }))
//     );
//   }, [location.pathname]);

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <p
//                     key={item.name}
//                     onClick={() => navigate(item.href)}
//                     className={classNames(
//                       item.current ? 'bg-sky-900 text-white'  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
//                     )}
//                   >
//                     {item.name}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
//                     className="h-8 w-8 rounded-full border"
                    
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
//               >
//                 {/* <MenuItem>
//                   <b onClick={() => { navigate('/profile'); }} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
//                     Your Profile
//                   </b>
//                 </MenuItem> */}
//                 {/* <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700">
//                     Settings
//                   </a>
//                 </MenuItem> */}
//                 <MenuItem>
//                   <b onClick={() => { localStorage.clear(); navigate('/'); }} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
//                     Sign out
//                   </b>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               onClick={() => navigate(item.href)}
//               className={classNames(
//                 item.current ? 'bg-sky-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Padding, SettingsInputComponent } from '@mui/icons-material';
import { colors } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];

const initialNavigation = [
  { name: 'Home', href: '/home', current: true },  // Home is true by default
  { name: 'About', href: '/about', current: false },
  { name: 'Videos', href: '/videos', current: false },
  { name: 'Library', href: '/library', current: false },
  { name: 'Contact' , href: '/contact', current: false },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [navigation, setNavigation] = React.useState(initialNavigation);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    React.useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        // Set "Home" to true only if the pathname is exactly "/"
        current: location.pathname === item.href,
      }))
    );
  }, [location.pathname]);


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
            {navigation.map((item) => (
           
                          <Button
                key={item.name}
                onClick={() => navigate(item.href)}
                sx={{ my: 2, color: 'black',bgcolor:'primery', display: 'block' }}
              >
                {item.name}
              </Button>
              
            
                ))}
           
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {navigation.map((item) => (
           
           <Button
 key={item.name}
 onClick={() => navigate(item.href)}
 sx={{ my: 2, color: 'white', display: 'block' }}
>
 {item.name}
</Button>

 ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box sx={{border:'2px solid White',paddingX:'5px',paddingTop:'4px', borderRadius:'100%'}}>
                <LogoutIcon sx={{color :"white", }} alt="Remy Sharp" />

                </Box>
                {/* <Avatar alt="Remy Sharp" src={LogoutIcon} /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
    
                <MenuItem  onClick={handleCloseUserMenu}>
                     <b onClick={() => { localStorage.clear(); navigate('/'); }} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                    Sign out
                   </b>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;