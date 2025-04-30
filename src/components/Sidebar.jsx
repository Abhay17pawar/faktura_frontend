import React from 'react';
import politicianImg from '/politician.png';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Pricelist from '../pages/Pricelist';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(9),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  })
);

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
}));

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Invoices', icon: <DescriptionIcon sx={{ color: '#00BCD4' }} />, active: false },
    { text: 'Customers', icon: <PeopleIcon sx={{ color: '#4CAF50' }} />, active: false },
    { text: 'My Business', icon: <SettingsIcon sx={{ color: '#2196F3' }} />, active: false },
    { text: 'Invoice Journal', icon: <MenuBookIcon sx={{ color: '#03A9F4' }} />, active: false },
    { text: 'Price List', icon: <LocalOfferIcon sx={{ color: '#FF9800' }} />, active: true },
    { text: 'Multiple Invoicing', icon: <FileCopyIcon sx={{ color: '#00BCD4' }} />, active: false },
    { text: 'Unpaid Invoices', icon: <MoneyOffIcon sx={{ color: '#E91E63' }} />, active: false },
    { text: 'Offer', icon: <CardGiftcardIcon sx={{ color: '#FFC107' }} />, active: false },
    { text: 'Inventory Control', icon: <InventoryIcon sx={{ color: '#00BCD4' }} />, active: false, lightText: true }, // Added lightText flag
    { text: 'Member Invoicing', icon: <GroupWorkIcon sx={{ color: '#2196F3' }} />, active: false, lightText: true }, // Added lightText flag
    { text: 'Import/Export', icon: <ImportExportIcon sx={{ color: '#03A9F4' }} />, active: false },
    { text: 'Log out', icon: <ExitToAppIcon sx={{ color: '#9E9E9E' }} />, active: false },
  ];
  
  const drawerContent = (
    <>
      <Box sx={{ p: 2, pb: 0, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#616161', fontWeight: 500 }}>
          Menu
        </Typography>
        <Box sx={{ borderBottom: '2px solid #03A9F4', width: '100%', mt: 1, mb: 1 }} />
      </Box>
      <List sx={{ pt: 0, px: 3 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              py: 0.5,
              position: 'relative',
              backgroundColor: item.active ? 'transparent' : 'transparent',
              cursor: 'pointer',
            }}
          >
            {item.active && (
              <Box
                sx={{
                  position: 'absolute',
                  left: -12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                }}
              />
            )}
            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: '0.9rem',
                fontWeight: 400,
                color: item.lightText ? '#B0BEC5' : 'inherit', // Grey text for specific items
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ backgroundColor: '#0288D1' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={politicianImg}
                alt="User Icon"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  mr: 1.5,
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
                  John Andre
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1 }}
                >
                  Storfjord AS
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 2 }}>
              Norsk Bokmål
            </Typography>
            <Box
              sx={{
                width: 24,
                height: 16,
                borderRadius: 0.5,
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Box
                component="img"
                src="https://country-flags.org/downloads/norway-flag/raster/norway-flag-2560px-1862px.jpg"
                alt="Norwegian flag"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '64px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Main>
        <Pricelist />
      </Main>
    </Box>
  );
}
