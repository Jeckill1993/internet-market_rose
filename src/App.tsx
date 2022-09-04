import React, {useState} from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {router} from "./modules/routers/router";

import './styles/reset.css';
import './styles/global.css';
import Modal from "./components/modals/Modal/Modal";

function App() {

    const [modalTemplateName, setModalTemplateName] = useState<string>('');
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Routes>
                {router}
            </Routes>
            <Modal isOpened={isOpenModal} modalTemplateName={modalTemplateName}
                   setIsOpenModal = {setIsOpenModal} setModalTemplateName={setModalTemplateName}/>
        </BrowserRouter>
    );
}

export default App;
