import React from 'react';
import Person from './Person/Person';


// const log = (...args) => console.log('[Persons.js]', ...args);

const persons = (props) => props.persons.map((person, ) => {
    return <Person
        delete={() => props.delete(person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
        id={person.id}
        changed={event => props.nameChanged(event, person.id)}
        />
});



export default persons;