import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import { router } from "./modules/routers/router";

import './styles/reset.css';
import './styles/global.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          { router }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
