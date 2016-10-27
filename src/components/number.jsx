import React from 'react'
import mobileDetect from 'mobile-detect'

const split = (s) => (
    s.split(' ').map(
        (c, i) => <span key={i} className="number__group">{c}</span>
    )
)

const toNumber = (string) => (
    `sms:+1${string.replace(/ /g, '')}`
)

const Number = ({string}) => {
    let md = new mobileDetect(window.navigator.userAgent)
    let digits = split(string)

    return md.mobile() ?
        <a href={toNumber(string)} className="number">
            {digits}
        </a> :
        <div className="number">
            {digits}
        </div>
}

export default Number
