import React from 'react';
import Header from "./components/Header";
import Image from "react-bootstrap/Image";

function App() {
    return (
        <div className="App">
            <Header/>
            <Image src={require('./images/lake.jpg')} fluid className="lake"/>
        </div>
    );
}

export default App;
