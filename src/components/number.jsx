import React from 'react'
import block from 'bem-cn'
import mobileDetect from 'mobile-detect'

const b = block('number')

// Split a string with spaces into <span> delimited groups
// E.g. "123 456 789" -> [<span>123</span>, <span>456</span>, etc]
const split = (s) => (
    s.split(' ').map(
        (c, i) => <span key={i} className={b('group')}>{c}</span>
    )
)

// Generate an SMS link with a given number
const toNumber = (string) => (
    `sms:+1${string.replace(/ /g, '')}`
)

const Number = ({string}) => {
    let md = new mobileDetect(window.navigator.userAgent)
    let digits = split(string)

    return md.mobile() ?
        <a href={toNumber(string)} className={b}>
            {digits}
        </a> :
        <div className={b}>
            {digits}
        </div>
}

export default Number
