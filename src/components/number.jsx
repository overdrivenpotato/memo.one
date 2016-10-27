import React from 'react'

const split = (s) => (
    s.split(' ').map(
        (c, i) => <span key={i} className="number__group">{c}</span>
    )
)

const toNumber = (string) => (
    `sms:+1${string.replace(/ /g, '')}`
)

const Number = ({string}) => (
    <a href={toNumber(string)} className="number">
        {split(string)}
    </a>
)

export default Number
