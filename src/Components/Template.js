import React, { useState } from 'react';
import './custom.css'
import CalculateFibonacciSequence from './Fibonacci'

export default function Template(containerClass) {
    const [fibonacciSequence, setFibonacciSequence] = useState(0);
    function CalculateFibonacci() {
        let rounds = document.querySelector('#rounds').value
        if (rounds == '') { return; }
        setFibonacciSequence(CalculateFibonacciSequence(rounds));
    }
    return (
        <div class={containerClass}>
            <div class="item a">
                <div class="container">
                    <div class="text-block">
                        <h4>Corona oversigt for Danmark </h4>
                    </div>
                    <img style={{ width: 800 }} src="https://i.imgur.com/P2kmObW.png" alt="Corona I Danmark"></img>
                </div>
            </div>
            <div class="item b">
                <div class="container">
                    <h5> Over 6000 smittede lige nu!!!</h5>
                    <img style={{ width: 600 }} src="https://covid19danmark.dk/figures/ntl_pos.png" alt="Smittede i Danmark"></img>
                </div>
            </div>
            <div class="item c">
                <div class="container">
                    <div>
                        <h5> Udregn Fibonacci Sekvens</h5>
                    </div>
                    <form>
                        <input type="number" id="rounds" min="0" placeholder="Skriv antal numre af Fibonacci tal" />
                        <button onClick={CalculateFibonacci}>Udregn</button>
                        <div class="scrollbox">
                            {fibonacciSequence}
                        </div>
                    </form>
                </div>
            </div>
            <div class="item d">
                <img style={{ width: 600 }} src="https://media.lex.dk/media/56011/standard_SARS-CoV-2_without_background.png" alt="Covid"></img>
            </div>
            <div class="item e">
                <a href="https://www.vacciner.dk/">Bestil vaccinations tid</a>
            </div>
        </div>
    )
}