import React, { useState } from 'react';

function App() {
    const [fibonacciSequence, setFibonacciSequence] = useState(0);

    function CalculateFibonacciSequence(rounds) {
        let n1 = 0
        let n2 = 1
        let result = "0"
        for (let index = 0; index < rounds; index++) {
            result += `, ${n2}`
            let temporaryN2 = n2
            n2 = n1 + n2
            n1 = temporaryN2
        }

        return result
    }

    function CalculateFibonacci() {
        let rounds = document.querySelector('#rounds').value
        if (rounds == '') { return; }
        setFibonacciSequence(CalculateFibonacciSequence(rounds));
    }

    return (
        <div>
            <div>
                <h1> Udregn Fibonacci Sekvens</h1>
            </div>
            <form>
                <input type="number" id="rounds" min="0" placeholder="Skriv antal numre af Fibonacci tal" />
                <button onClick={CalculateFibonacci}>Udregn</button>
                <p>{fibonacciSequence}</p>
            </form>
        </div>
    );
}

export default App;