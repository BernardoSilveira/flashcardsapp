import React, {Component} from 'react';
import {connect} from "react-redux";
//import store from "../redux/store";

import "../css/Flashcard.css";
import {FLIP_FLASHCARD} from "../redux/actionTypes";
//import {flipFlashcard} from "../redux/actions";

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

const mapDispatchToProps = (dispatch) => {
    return {
       flipFlashcard: () => dispatch({type: FLIP_FLASHCARD})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);