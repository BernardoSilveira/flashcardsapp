import React, {Component} from 'react';
import {connect} from "react-redux";

class Score extends Component {
    render() {
        return (
            <div>
               <h1>Score:</h1>
                <h1>Wrong: {this.props.wrongCounterProp} x Right: {this.props.rightCounterProp}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {rightCounter, wrongCounter} = state;
    return {
        rightCounterProp: rightCounter,
        wrongCounterProp: wrongCounter
    }
}

export default connect(mapStateToProps)(Score);