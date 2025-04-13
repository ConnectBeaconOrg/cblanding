import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  MenuItem,
  Drawer,
  Box,
  Avatar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ConnectBeaconLogo from '../assets/connect_beacon_logo.jfif';
import { scroller } from 'react-scroll';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const scrollOptions = {
  duration: 500,
  smooth: true,
  offset: -80,
};

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'ai-use-cases' },
    { label: 'Expertise', to: 'expertise' },
    { label: 'Success', to: 'success-metrics' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px))',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
            {/* Logo + Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={ConnectBeaconLogo} sx={{ height: 50, width: 50, mr: 1 }} />
            <Typography variant='h6' fontWeight='bold' sx={{ color: '#003366' }}>
             Connect Beacon
            </Typography>
	    </Box>

            {/* Nav Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, ml: 4 }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="text"
                  sx={{
                    color: '#18181b',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 2,
                  }}
                  size="medium"
                  onClick={() => scroller.scrollTo(item.to, scrollOptions)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* CTA Button */}
            <Button
              variant="contained"
              onClick={() => scroller.scrollTo('book-demo', scrollOptions)}
              sx={{
                backgroundColor: '#003366',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#002244',
                },
              }}
            >
              Book a Demo
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {navItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      scroller.scrollTo(item.to, scrollOptions);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}

                <MenuItem
                  onClick={() => {
                    scroller.scrollTo('book-demo', scrollOptions);
                    setOpen(false);
                  }}
                >
                  Book a Demo
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

