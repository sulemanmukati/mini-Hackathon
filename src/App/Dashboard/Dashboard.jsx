import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const initialNavigation = [
  {
    segment: 'home',
    title: 'Home',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'home1',
        title: 'Home 1',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'home2',
        title: 'Home 2',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'about',
    title: 'About',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'about1',
        title: 'About 1',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'about2',
        title: 'About 2',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'about',
    title: 'About',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'about1',
        title: 'About 1',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'about2',
        title: 'About 2',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'about',
    title: 'About',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'about1',
        title: 'About 1',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'about2',
        title: 'About 2',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'about',
    title: 'About',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'about1',
        title: 'About 1',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'about2',
        title: 'About 2',
        icon: <DescriptionIcon />,
      },
    ],
  },
 
 
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Dashboard(props) {
  const { window, props1 } = props;
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [pathname, setPathname] = React.useState('/movies/lord-of-the-rings');
  const [navigation, setNavigation] = React.useState(initialNavigation);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  // Session management state
  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  // Authentication object with signIn and signOut methods
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: (e) => {
        e.preventDefault()
        // Clear local storage on sign-out
        localStorage.clear();

        // Clear session state
        setSession(null);

        // Navigate to the login page
        navigate('/'); // Replace '/login' with the correct path
      },
    };
  }, [navigate]);

  // React.useEffect(() => {

    
  //   setNavigation((prevNavigation) => {
  //     const updatedNavigation = prevNavigation.map((item) => ({
  //       ...item,
  //       current: location.pathname === item.href,
  //     }));
      
  //     // Only update if there are changes
  //     if (JSON.stringify(updatedNavigation) !== JSON.stringify(prevNavigation)) {
  //       return updatedNavigation;
  //     }
  
  //     return prevNavigation; // Return previous state if no changes
  //   });
  // }, [location.pathname]);
  return (
    <AppProvider
      session={session}
      authentication={authentication}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'MUI',
      }}
      navigation={navigation}
      // navigation={initialNavigation}

      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        {props1}

        {/* DemoPageContent to display the content for the selected path
        <DemoPageContent pathname={pathname} /> */}
      </DashboardLayout>
    </AppProvider>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
