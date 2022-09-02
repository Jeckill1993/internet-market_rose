import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import { router } from "./modules/routers/router";

function App() {
    console.log(router);
  return (
    <BrowserRouter>
      <Routes>
          { router }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
