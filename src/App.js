import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <Person name={"Max"} age={"28"}/>
                <Person name={"Nico"} age={"27"}/>
                <Person name={"Pili"} age={"25"}/>
            </div>
        );
    }
}

export default App;
