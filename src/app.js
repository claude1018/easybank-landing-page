import React from 'react';
import { Navbar, Footer } from './components';
import { Intro, Features, Articles } from './containers';
import './app.css';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
      </div>
      <Features />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
