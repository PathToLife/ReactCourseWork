import React from 'react';
import Person from './Person/Person';
import './App.css';

const shortid = require('shortid');

/**
 * This React Component was to made so that we can use the radium inline style generator.
 * As of 06/2019 there is no release version of radium that supports react hooks.
 *
 * Plus it's good practise to learn class components so that we can work on legacy projects / react native.
 */

// python nerd =P
const print = (...args) => {
    console.log(...args);
};

class AppUsingClass extends React.Component {

    state = {
        persons: [
            AppUsingClass.makePerson('James', 20),
            AppUsingClass.makePerson('Harry', 25),
            AppUsingClass.makePerson('Stephanie', 24)
        ],
        showPersons: true
    };

    static makePerson(name, age) {
        if (name.length <= 0) throw Error('field "name" cannot be empty');
        if (isNaN(parseInt(age))) throw Error('field "age" is not a number');

        return {
            id: shortid.generate(),
            name,
            age
        }
    }

    render() {

        const deletePersonHandler = (id) => {
            const newState = [...this.state.persons];
            const index = newState.findIndex(p => p.id === id);
            if (index >= 0) {
                newState.splice(index, 1);
                this.setState({persons: newState});
            }
        };

        const changeNameHandler = (event, id) => {

            const newState = [...this.state.persons];
            const index = newState.findIndex(p => p.id === id);
            if (index >= 0) {
                const newP = {...newState[index]};
                newP.name = event.target.value;
                newState[index] = newP;
                this.setState({persons: newState});
            }

        };

        let personsHtml = null;
        if (this.state.showPersons) {
            personsHtml = this.state.persons.map(p => {
                return (
                    <Person name={p.name} age={p.age}
                            id={p.id} key={p.id}
                            delete={() => deletePersonHandler(p.id)}
                            change={(e) => changeNameHandler(e, p.id)}/>
                )
            })
        }

        const toggleButtonStyle = {
            backgroundColor: (this.state.showPersons) ? 'red' : 'lightgreen',
            color: 'white',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hello</h1>
                <button
                    style={toggleButtonStyle}
                    onClick={() => this.setState({showPersons: !this.state.showPersons})}>
                    Toggle Persons
                </button>
                {personsHtml}
            </div>
        )
    }
}

export default AppUsingClass;