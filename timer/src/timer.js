import React, { Component } from "react";

class timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipTarget: "time",
            fixedTarget: 'time2',
            flipClass: ['', '', '', '', '', '']
        }
    }
    shouldComponentUpdate(nextprops, nextState) {
        if (nextprops.time !== this.props.time) {
            if (nextprops.time.hours !== this.props.time.hours) {
                if (parseInt(this.props.time.hours / 10) !== parseInt(nextprops.time.hours / 10)) {
                    this.setState({ flipClass: ['flip', 'flip', 'flip', 'flip', 'flip', 'flip'] })
                } else {
                    this.setState({ flipClass: ['', 'flip', 'flip', 'flip', 'flip', 'flip'] })
                }
                console.log('hours')
            }
            else if (nextprops.time.minutes !== this.props.time.minutes) {
                if (parseInt(this.props.time.minutes / 10) !== parseInt(nextprops.time.minutes / 10)) {
                    this.setState({ flipClass: ['', '', 'flip', 'flip', 'flip', 'flip'] })
                } else {
                    this.setState({ flipClass: ['', '', '', 'flip', 'flip', 'flip'] })
                }
                console.log('minute')
            }
            else if (nextprops.time.seconds !== this.props.time.seconds) {
                if (parseInt(this.props.time.seconds / 10) !== parseInt(nextprops.time.seconds / 10)) {
                    this.setState({ flipClass: ['', '', '', '', 'flip', 'flip'] })
                } else {
                    this.setState({ flipClass: ['', '', '', '', '', 'flip'] })
                }
            }
            return true;
        }
        else if (nextprops.time === this.props.time) {
            return false;
        }

    }
    changeMode(num) {
        return this.state.flipTarget + ' ' + this.state.flipClass[num]
    }
    changeClass = () => {
        this.setState({ flipClass: ['', '', '', '', '', ''] })
    }


    render() {
        return (
            <main>
                <div className="container">
                    <div className="backTime">
                        <div className={this.state.fixedTarget}>{parseInt(this.props.time.hours / 10)}</div>
                        <div className={this.state.fixedTarget}>{this.props.time.hours % 10}</div><span>:</span>
                        <div className={this.state.fixedTarget}>{parseInt(this.props.time.minutes / 10)}</div>
                        <div className={this.state.fixedTarget}>{this.props.time.minutes % 10}</div><span>:</span>
                        <div className={this.state.fixedTarget}>{parseInt(this.props.time.seconds / 10)}</div>
                        <div className={this.state.fixedTarget}>{this.props.time.seconds % 10}</div>
                    </div>
                    <div className="frontTime">
                        <div className={this.changeMode(0)} onTransitionEnd={this.changeClass}>{parseInt(this.props.time.hours / 10)}</div>
                        <div className={this.changeMode(1)} onTransitionEnd={this.changeClass}>{this.props.time.hours % 10}</div><span>:</span>
                        <div className={this.changeMode(2)} onTransitionEnd={this.changeClass}>{parseInt(this.props.time.minutes / 10)}</div>
                        <div className={this.changeMode(3)} onTransitionEnd={this.changeClass}>{this.props.time.minutes % 10}</div><span>:</span>
                        <div className={this.changeMode(4)} onTransitionEnd={this.changeClass}>{parseInt(this.props.time.seconds / 10)}</div>
                        <div className={this.changeMode(5)} onTransitionEnd={this.changeClass}>{this.props.time.seconds % 10}</div>
                    </div>
                </div>
            </main>
        );
    }
}
export default timer;