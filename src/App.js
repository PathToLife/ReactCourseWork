import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
    const [statePerson, setStatePerson] = useState([
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 19},
        {name: "James", age: 30}
    ]);

    const [showPersons, setShowPersons] = useState(false);

    const switchNameHandler = (event, index) => {
        const newPersons = [...statePerson];
        newPersons[index].name = event.target.value;
        setStatePerson(newPersons)
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    };

    // best way to output conditional content
    let PersonsHTML = (showPersons === true) ?
        statePerson.map((person, index) => {
            return (<Person
                key={index}
                index={index}
                name={person.name}
                age={person.age}
                change={switchNameHandler}
            />)
        }) : null;

    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>
            <div>
                Name: <input type="text"/>
                <br/>
                Age: <input type="text"/>
            </div>
            <button onClick={togglePersonsHandler}>Show Persons</button>
            {PersonsHTML}
        </div>
    );
}

export default App;
