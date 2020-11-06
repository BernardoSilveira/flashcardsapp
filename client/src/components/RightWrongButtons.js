import React, {Component} from 'react';
import {connect} from "react-redux";
import {incrementRightCounter, incrementWrongCounter} from "../redux/actions";

class RightWrongButtons extends Component {
    render() {
        if (this.props.isFlipedAsProp) {
            return (
                <div>
                    <button onClick={this.props.incrementWrongCounter}>Wrong</button>
                    <button onClick={this.props.incrementRightCounter}>Right</button>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = state => {
    const {isCardFliped} = state;
    return {
        isFlipedAsProp: isCardFliped
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementRightCounter: () => dispatch(incrementRightCounter),
        incrementWrongCounter: () => dispatch(incrementWrongCounter)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightWrongButtons);
