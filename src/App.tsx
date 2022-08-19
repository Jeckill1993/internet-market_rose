import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import { router } from "./modules/Router";

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
