import { useEffect, useState } from "react";

import Message from "../components/Message";
import React from "react";

export default function Home() {
    const [counter, setCounter] = useState<number>(1);
    const [showMessage, setShowMessage] = useState(true);    

    const incClickHandler = () => {
        setCounter(prevState => prevState + 1);
    }

    const toggleClickHandler = () => {
        setShowMessage( prevState => !prevState );
    }   

    return (
        <main className="flex min-h-screen flex-col items-center p24">
            <ul>
                <li>{counter}</li>
                <li>2</li>
                <li>3</li>
                <li>{showMessage && <Message msg={"Hello"}/>}</li>
            </ul>


            <button className="p-3 mt-3 rounded text-green-800" onClick={incClickHandler}>inc counter</button>
            <button className="p-3 mt-3 rounded text-green-800" onClick={toggleClickHandler}>toggle show message</button>

        </main>
    )

}