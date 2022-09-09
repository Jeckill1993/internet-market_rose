import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignBoard from "../components/main-page-components/SignBoard/SignBoard";
import PopularProductsBoard from "../components/main-page-components/PopularProductsBoard/PopularProductsBoard";
import InstagramBoard from "../components/main-page-components/InstagramBoard/InstagramBoard";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main className={"main"}>
                <SignBoard/>
                <PopularProductsBoard/>
                <InstagramBoard/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;