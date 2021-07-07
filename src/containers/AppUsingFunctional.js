import React, {useState} from 'react';
import Person from '../components/Persons/Person/Person';
import './App.css';
import Radium from 'radium';

import {generate} from "shortid";


// Creates a person object with a unique id for database storage and list render efficiency
function makePerson(name, age, id = null) {
    return {id: (id) ? id : generate(), name, age};
}

/**
 * @deprecated Replaced with AppUsingClass
 * Will not be developed further until the need to learn functional react hooks outweighs the need to learn native.
 */
const AppUsingFunctional = Radium(() => {
    const [statePersons, setStatePersons] = useState([
        makePerson('Max', 28),
        makePerson('Manu', 25),
        makePerson('Stephanie', 19),
        makePerson('James', 30)
    ]);

    const [showPersons, setShowPersons] = useState(true);

    const switchNameHandler = (event, id) => {
        const index = statePersons.findIndex(p => p.id === id);
        if (index >= 0) {
            const newPersons = statePersons.slice(); // slice operator to copy, can also do spread [...x

            // Immutability is super important so we make a new person object but with same id.
            const oldP = statePersons[index];
            newPersons[index] = makePerson(event.target.value, oldP.age, oldP.id);
            setStatePersons(newPersons)
        }
    };

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('20');

    const addPersonHandler = () => {
        if (inputName.length > 0 && !isNaN(parseInt(inputAge))) {
            const newPersons = [...statePersons];
            newPersons.push(makePerson(inputName, inputAge));
            setStatePersons(newPersons);
        } else {
            console.log('Invalid Person Input', inputName, inputAge)
        }
    };

    const deletePersonHandler = (id) => {
        const newPersons = [...statePersons];
        const index = newPersons.findIndex(p => p.id === id);
        if (index >= 0) {
            newPersons.splice(index, 1);
            setStatePersons(newPersons);
        }
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    };

    // best way to output conditional content
    let PersonsHTML = (showPersons === true) ?
        (statePersons.length > 0) ? statePersons.map((person) => {
            return (<Person
                // react expects a key for elements from arrays to render efficiently
                // index is unreliable as the order of the array elements can change, therefore we use an unique id.
                key={person.id}
                id={person.id}

                name={person.name}
                age={person.age}

                delete={() => deletePersonHandler(person.id)}
                change={(e) => switchNameHandler(e, person.id)}
            />)
        }) : <div className="warning-text bold Person">No persons</div> : null;

    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>
            <div>
                <div className="input-area">
                    Name:
                    <input
                        type="text"
                        placeholder="type a name"
                        onChange={(e) => setInputName(e.target.value)}
                    />
                    <br/>
                    Age: <input type="number" value={inputAge} onChange={(e) => setInputAge(e.target.value)}/>
                    <button id='add-person-btn' onClick={addPersonHandler}>Add Person</button>
                </div>

            </div>

            <button
                onClick={togglePersonsHandler}
                className={(showPersons ? 'red' : 'lightgreen')}>
                Toggle Persons
            </button>
            {PersonsHTML}
        </div>
    );
});

export default AppUsingFunctional;
