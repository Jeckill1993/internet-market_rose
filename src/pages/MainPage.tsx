import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignBoard from "../components/main-page-components/SignBoard/SignBoard";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main className={"main"}>
                <SignBoard />
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;