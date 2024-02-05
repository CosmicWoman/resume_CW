import React, {useEffect} from 'react';
import './style/App.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {useSelector} from "react-redux";

function App() {
    const theme = useSelector((state:any) => state.theme)

    useEffect(() => {
        themeBody()
    }, [theme])

    function themeBody(){
        if(theme === 'light'){
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }

    return (
        <div className="app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
