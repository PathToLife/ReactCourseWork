import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
    const [statePersons, setStatePersons] = useState([
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 19},
        {name: "James", age: 30}
    ]);

    const [showPersons, setShowPersons] = useState(false);

    const switchNameHandler = (event, index) => {
        const newPersons = statePersons.slice(); // slice operator to copy, can also do spread [...x]
        newPersons[index].name = event.target.value;
        setStatePersons(newPersons)
    };

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const addPersonHandler = () => {
        if (inputName.length > 0 && !isNaN(parseInt(inputAge))) {
            const newPersons = [...statePersons];
            newPersons.push({name: inputName, age:inputAge});
            setStatePersons(newPersons);
        } else {
            console.log('Invalid Person Input')
        }
    };

    const deletePersonHandler = (event, index) => {
        const newPersons = [...statePersons];
        newPersons.splice(index, 1);
        setStatePersons(newPersons);
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    };

    // best way to output conditional content
    let PersonsHTML = (showPersons === true) ?
        (statePersons.length > 0) ? statePersons.map((person, index) => {
            return (<Person
                key={index}
                index={index}
                name={person.name}
                age={person.age}

                click={() => deletePersonHandler(index)}
                change={(e) => switchNameHandler(e, index)}
            />)
        }) : <div className="warning-text">No persons</div> : null;

    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>
            <div>
                <div>
                    Name: <input type="text" onChange={(e) => setInputName(e.target.value)}/>
                    <br/>
                    Age: <input type="number" onChange={(e) => setInputAge(e.target.value)}/>
                </div>
                <button onClick={addPersonHandler}>Add Person</button>
            </div>

            <button onClick={togglePersonsHandler}>Show Persons</button>
            {PersonsHTML}
        </div>
    );
}

export default App;
