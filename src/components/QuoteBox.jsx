import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react'

const colors = ["#9CB4CC", "#F2D1D1", "#EF9F9F", "#F4E06D", "#9A86A4", "#B9F8D3", "#C0EDA6", "#8E806A", "#28FFBF", "#4C4C6D"]

const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length)
    const [change, setChange] = useState(random)

    const changeQuote = () => {
        /*alert("¡Cambiaste el usuario!")*/
        const random = Math.floor(Math.random() * quotes.length)
        setChange(random)
    }

    const randomColors = Math.floor(Math.random() * colors.length)
    const color = colors[randomColors]

    document.body.style = `background: ${color}`

    return (
        <div>
            <div className="card" style={{ color: color }}>
                <i className="fa-solid fa-quote-left"></i>
                <p className="quote"> {quotes[change].quote} </p>
                <p className="author"> {quotes[change].author} </p>
                <button onClick={changeQuote} style={{ background: color }}> <i className="fa-solid fa-angle-right"></i> </button>
            </div>
        </div>
    );
};

export default QuoteBox;