import React from "react";


export default class Time extends React.Component {
    constructor(props) {
        super();
        this.state = {
            time: 0,
            mounted: false
        }
        this.updateTime = this.updateTime.bind(this);
        this.interval = setInterval(this.updateTime, 1000);
    }

    componentDidMount = () => {
        this.setState({
            mounted: true
        })
    }

    updateTime = () => {
        if (this.state.mounted === true){
            fetch("http://127.0.0.1:8000/get-datetime").then(res => res.json()).then(
                json => {
                    this.setState({
                        time: json["datetime"]
                    })
                }
            ).catch(error => {
                console.log(error);
            })
        }
    }

    componentWillUnmount = () => {
        this.interval = clearInterval(this.interval);
    }

    render () {
        return (
            <span>
                {this.state.time}
            </span>
        )
    }
}