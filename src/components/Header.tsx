import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import './style.css'


const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="h1" sx={{ mr: 2 }}>
            Match-Match
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '20rem',
            }}
          >
            <NavLink to="/" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
              <Typography sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InfoIcon/>
                About Game
              </Typography>
            </NavLink>
            <NavLink to="/score" style={{ textDecoration: 'none', display: 'block', width: '100%'}}>
              <Typography sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StarsIcon/>
                Score
              </Typography>
            </NavLink>
            <NavLink to="/settings" style={{ textDecoration: 'none', display: 'block', width: '100%'}}>
              <Typography sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SettingsIcon/>
                Settings
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
