import React from 'react';
import {Header} from './Components/header/Header';
import Main from './Components/main/Main';
import Skills from './Components/skills/Skills';
import {Works} from './Components/myWorks/Works';
import {RemotelyWork} from './Components/remotelyWork/remotelyWork';
import {Contact} from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemotelyWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
