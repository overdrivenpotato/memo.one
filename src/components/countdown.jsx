import React from 'react'
import block from 'bem-cn'
import { sprintf } from 'sprintf-js'
import intersperse from 'intersperse'

const b = block('countdown')

const TARGET_DATE = new Date('11/19/2016 8:00 PM')
const SECONDS = 1000
const MINUTES = 60
const HOURS   = 60
const DAYS    = 24

class Countdown extends React.Component {
    constructor() {
        super()
        setInterval(() => this.update(), 1000)
    }

    componentWillMount() {
        this.update()
    }

    update() {
        const duration = TARGET_DATE - Date.now()

        let seconds = Math.floor(duration / SECONDS)
        let minutes = Math.floor(seconds / MINUTES)
        let hours = Math.floor(minutes / HOURS)
        let days = Math.floor(hours / DAYS)

        seconds -= minutes * MINUTES
        minutes -= hours * HOURS
        hours   -= days * DAYS

        const times = [
            days,
            hours,
            minutes,
            seconds,
        ].map(v => sprintf('%02d', v))

        this.setState({times})
    }

    render() {
        return <div className={b}>
            {
                this.state.times.map((t, i) => {
                    // Split the time strings into digits to space evenly
                    return <span className={b('group')} key={i}>
                        <span className={b('digit', {left: true })}>{t[0]}</span>
                        <span className={b('digit', {right: true})}>{t[1]}</span>
                    </span>
                })
            }
        </div>
    }
}

export default Countdown
