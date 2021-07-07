import React from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';
import withClass from '../hoc/withClassFunction';
import Aux from '../hoc/Auxillary';

import AuthContext from '../context/auth-context';

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

const log = (...args) => console.log('[App.js]', ...args);


class AppUsingClass extends React.Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            AppUsingClass.makePerson('James', 20),
            AppUsingClass.makePerson('Harry', 25),
            AppUsingClass.makePerson('Stephanie', 24)
        ],
        showPersons: true,
        changeCounter: 0,
        authenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    static makePerson(name, age) {
        if (name.length <= 0) throw Error('field "name" cannot be empty');
        if (isNaN(parseInt(age))) throw Error('field "age" is not a number');

        return {
            id: shortid.generate(),
            name,
            age
        }
    }

    componentDidMount() {
        log('Mounted');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log('componentDidUpdate')
    }

    loginHandler = (isLoggedIn) => {
        this.setState({authenticated: isLoggedIn});
    };

    deletePersonHandler = (id) => {
        const newState = [...this.state.persons];
        const index = newState.findIndex(p => p.id === id);
        if (index >= 0) {
            newState.splice(index, 1);
            this.setState({persons: newState});
        }
    };

    changeNameHandler = (event, id) => {
        const newState = [...this.state.persons];
        const index = newState.findIndex(p => p.id === id);
        if (index >= 0) {
            const newP = {...newState[index]};
            newP.name = event.target.value;
            newState[index] = newP;

            // Updating the state when depending on old state, is super important to use function to have n accurate snapshot of state
            this.setState((previousState, ) => {
                return {
                    persons: newState,
                    changeCounter: previousState.changeCounter + 1
                }
            });
        }

    };

    render() {
        console.log('[App.js] Rendering...');



        let personsComponent = null;
        if (this.state.showPersons) {
            personsComponent = (<Persons
                persons={this.state.persons}
                delete={this.deletePersonHandler}
                nameChanged={this.changeNameHandler}
            />);
        }

        return (
            <Aux>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: () => this.loginHandler(true),
                    logout: () => this.loginHandler(false)
                }}>
                    <Cockpit
                        title={this.props.title}
                        length={this.state.persons.length}
                        showing={this.state.showPersons}
                        togglePersons={() => this.setState({showPersons: !this.state.showPersons})}
                    />
                    {personsComponent}
                </AuthContext.Provider>
            </Aux>
        )
    }
}

export default withClass(AppUsingClass, 'App');