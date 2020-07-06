import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
}

export default App;
