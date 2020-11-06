import React from 'react';
import './App.css';
import Score from "./components/Score";
import Flashcard from "./components/Flashcard";
import AddWord from "./components/AddWord";
import RightWrongButtons from "./components/RightWrongButtons";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Score/>
                <Flashcard/>
                <RightWrongButtons />
                <AddWord />
            </div>
        );
    }
}

export default App;
