import React, {Component} from 'react';
import {connect} from "react-redux";

class Flashcard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.wordAsProp}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {words, selectedWordIndex} = state;
    if (words) {
        const selectedWordObject = words[selectedWordIndex];

        return {
            wordAsProp: state.czech_language ? selectedWordObject.czech_word : selectedWordObject.english_word
        }
    } else {
        return {}
    }
}

export default connect(mapStateToProps)(Flashcard);