import React, {Component} from 'react';
import {addWord} from "../redux/actions";
import {connect} from "react-redux";
import {saveWords} from "../handleWords";

class AddWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            czechWord: '',
            englishWord: ''
        };

    }

    handleCzechChange = (event) => this.setState({czechWord: event.target.value});
    handleEnglishChange = (event) => this.setState({englishWord: event.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        const {czechWord, englishWord} = this.state;
        saveWords(czechWord, englishWord);
        this.props.onSubmit(czechWord, englishWord);
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Czech:
                        <input name="czechInput" onChange={this.handleCzechChange} type="text" />
                    </label>
                    <br/>
                    <label>
                        English
                        <input name="englishInput" onChange={this.handleEnglishChange} type="text"/>
                    </label>
                    <br/>
                    <input type="submit" onClick={this.handleSubmit}  style={{height: 50, width: 200}}/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (payload1, payload2) => dispatch(addWord(payload1, payload2))
    }
};

export default connect(null, mapDispatchToProps)(AddWord);