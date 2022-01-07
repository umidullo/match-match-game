import { Container } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container
        sx={{mt: '1rem'}}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
