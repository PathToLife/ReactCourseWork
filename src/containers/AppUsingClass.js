import React from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';

const shortid = require('shortid');

/**
 * This React Component was to made so that we can use the radium inline style generator.
 * As of 06/2019 there is no release version of radium that supports react hooks.
 *
 * Plus it's good practise to learn class components so that we can work on legacy projects / react native.
 */

// python nerd =P
// const print = (...args) => {
//     console.log(...args);
// };

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

        let personsComponent = null;
        if (this.state.showPersons) {
            personsComponent = (<Persons
                persons={this.state.persons}
                delete={deletePersonHandler}
                nameChanged={changeNameHandler}
            />);
        }

        return (
            <div className="App">
                <Cockpit
                    persons={this.state.persons}
                    showing={this.state.showPersons}
                    togglePersons={() => this.setState({showPersons: !this.state.showPersons})}
                />
                {personsComponent}
            </div>
        )
    }
}

export default AppUsingClass;