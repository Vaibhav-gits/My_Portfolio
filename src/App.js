import React from 'react';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
