import React, {Component} from 'react';
import {connect} from "react-redux";

import "../css/Flashcard.css";
import {flipFlashcard} from "../redux/actions";

class Flashcard extends Component {

    render() {
        return (
            <div className='flashcardDiv' onClick={this.props.flipFlashcard}>
                <h1>{this.props.wordAsProp}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {words, selectedWordIndex, isCardFliped} = state;
    if (words) {
        const selectedWordObject = words[selectedWordIndex];

        return {
            wordAsProp: isCardFliped ? selectedWordObject.english_word : selectedWordObject.czech_word
        }
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       flipFlashcard: () => dispatch(flipFlashcard)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);