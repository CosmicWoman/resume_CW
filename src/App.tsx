import React from 'react';
import './style/App.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
