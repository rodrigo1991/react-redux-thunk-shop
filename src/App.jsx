import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import useStyles from './appStyle';
import ShopDrawer from './components/Drawer/ShopDrawer.jsx';
import AppRoutes from './Routes/AppRoutes.jsx';
import LoginRoute from './Routes/LoginRoute.jsx';

const App = () => {
  const classes = useStyles();
  if (window.location.pathname === '/login') return <LoginRoute />;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <ShopDrawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <AppRoutes />
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default App;
