import React from 'react';
// import './App.css';
import Routes from './router/index';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      {Routes}
      <footer>Footer information</footer>
      <Footer />
    </>
  );
}

export default App;
