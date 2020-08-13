import React from 'react';

import Jumbotron from './Jumbotron';
import Display from './Display';
/* import ButtonPanel from './ButtonPanel'; */
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Display />
      {/* <ButtonPanel /> */}
      <Footer />
    </div>
  );
}

export default App;
