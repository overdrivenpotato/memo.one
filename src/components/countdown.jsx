import React from 'react'
import { sprintf } from 'sprintf-js'
import intersperse from 'intersperse'

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
        this.setState({times: this.times()})
    }

    times() {
        let duration = new Date('11/19/2016 8:00 PM') - Date.now()

        let seconds = Math.floor(duration / SECONDS)
        let minutes = Math.floor(seconds / MINUTES)
        let hours = Math.floor(minutes / HOURS)
        let days = Math.floor(hours / DAYS)

        let hours2 = hours - (days * DAYS)
        let minutes2 = minutes - (hours * HOURS)
        let seconds2 = seconds - (minutes * MINUTES)

        return [
            days,
            hours2,
            minutes2,
            seconds2
        ].map(v => sprintf('%02d', v))
    }

    render() {
        return <div className="countdown">
            {
                intersperse(
                    this.state.times.map((t, i) => {
                        return <span>
                            <span className="countdown__digit countdown__digit--left">{t[0]}</span>
                            <span className="countdown__digit countdown__digit--right">{t[1]}</span>
                        </span>
                    }),
                    <span className="countdown__divider">:</span>
                )
            }
        </div>
    }
}

export default Countdown
