import React from 'react';
import { Navbar, Footer } from './components';
import { Intro, Features, Articles } from './containers';
import './app.css';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Intro />
      </header>
      <main>
        <Features />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
