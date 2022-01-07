import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ mr: 2 }}
          >
            Match-Match
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '16rem'}}>
            <NavLink to="/">
              <Typography sx={{ my: 2, color: 'white', display: 'block' }}>About Game</Typography>
            </NavLink>
            <NavLink to="/score">
              <Typography sx={{ my: 2, color: 'white', display: 'block' }}>Score</Typography>
            </NavLink>
            <NavLink to="/settings">
              <Typography sx={{ my: 2, color: 'white', display: 'block' }}>Settings</Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
