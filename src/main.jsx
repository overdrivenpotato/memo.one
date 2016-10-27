import React from 'react'
import ReactDOM from 'react-dom'
import block from 'bem-cn'
import App from './components/app'

block.setup({
    mod: '--',
    modValue: '-',
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
