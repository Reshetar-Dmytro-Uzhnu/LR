import React, {useState} from "react";
import './App.css';
import Detals from "./Detals.jsx";
import ukrainianBoxers from "./Data.js";

function App() {
    const [Index, setIndex] =useState( 0);

    return (
        <div>
            <button className="nav-btn"
                    onClick={() => setIndex(prevState => (prevState + 1) % ukrainianBoxers.length)}>
                Далі &gt;&gt;
            </button>
            <div className="details-box">
            <Detals item={ukrainianBoxers[Index]}/>
            </div>
            <button className="nav-btn"
                onClick={() => setIndex(prevState => (prevState - 1 + ukrainianBoxers.length) % ukrainianBoxers.length)
            }>
                &lt;&lt; Назад
            </button>
        </div>
    );
}

export default App;
