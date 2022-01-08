import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '1rem' }}>
        <Box
          sx={{
            m: 'auto',
            width: 1000,
            minHeight: 700,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 5,
            display: 'block',
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
