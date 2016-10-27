import React from 'react'
import Countdown from './countdown'
import Number from './number'

const numbers = [
    "416 453 3812",
    "647 123 4567",
    "416 123 4567",
]

const App = () => (
    <div className="app">
        <h1 className="app__header">MEMO</h1>
        <div className="app__countdown">
            <Countdown />
        </div>
        <div className="app__numbers">
            {
                numbers.map((num, i) => <Number key={i} string={num} />)
            }
        </div>
    </div>
)

export default App
