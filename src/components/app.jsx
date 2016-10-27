import React from 'react'
import Countdown from './countdown'
import Number from './number'

const numbers = [
    "416 903 4823",
    "647 293 1294",
    "647 057 6335",
    "647 914 8543",
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
