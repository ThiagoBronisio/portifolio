import React from 'react';
import './styles/global.scss';
import './styles/variables.scss'

import { Header } from "./components/Header/index"
import { Main } from "./components/Main/index"

function App() {
  return (
    <>
      <Header />
      <Main />

      <footer>

      </footer>
    </>
  );
}

export default App;
