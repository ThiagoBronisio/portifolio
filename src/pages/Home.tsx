import React from 'react';
import '../styles/global.scss';
import '../styles/variables.scss'

import { Header } from "../components/Header/index"
import { Main } from "../components/Main/index"
import { Footer } from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
