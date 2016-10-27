import React from 'react'
import block from 'bem-cn'
import Countdown from './countdown'
import Number from './number'

const b = block('app')

const numbers = [
    "416 453 3812",
    "647 123 4567",
    "416 123 4567",
]

const App = () => (
    <div className={b}>
        <h1 className={b('header')}>MEMO</h1>
        <div className={b('countdown')}>
            <Countdown />
        </div>
        <div className={b('numbers')}>
            {
                numbers.map((num, i) => <Number key={i} string={num} />)
            }
        </div>
    </div>
)

export default App
