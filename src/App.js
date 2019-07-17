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

    const switchNameHandler = (event) => {
        const newPersons = [...statePerson];
        newPersons[0].name = event.target.value;
        setStatePerson(newPersons)
    };

    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>

            <Person
                name={statePerson[0].name}
                age={statePerson[0].age}
                change={switchNameHandler}
            />
            <Person
                name={statePerson[1].name}
                age={statePerson[1].age}
                change={switchNameHandler}
            />
            <Person
                name={statePerson[2].name}
                age={statePerson[2].age}
                change={switchNameHandler}
            />
            <Person
                name={statePerson[3].name}
                age={statePerson[3].age}
                change={switchNameHandler}
            />
        </div>
    );
}

export default App;
