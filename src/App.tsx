import React, {useState} from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {router} from "./modules/routers/router";

import './styles/reset.css';
import './styles/global.css';
import Modal from "./components/modals/Modal/Modal";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {router}
            </Routes>
            <Modal/>
        </BrowserRouter>
    );
}

export default App;
