import React, { Component } from 'react'


class Card extends Component {

    constructor() {
        super()

        this.state = {
            ButtonText: "Play",
            color: "red",
            dates: new Date()
        }
    }

    change = () => {

        this.setState({
            ButtonText: "Pause",
            color: "blue"

        })


    }

    render() {


        setInterval(() => {
            this.setState({
                dates: new Date()
            })

        }, 1000);

        return (
            <>
                <h2>{this.state.dates.toLocaleTimeString()}</h2>
                <button onClick={this.change} style={{ color: this.state.color }}>{this.state.ButtonText}</button>
            </>
        )
    }
}

export default Card
