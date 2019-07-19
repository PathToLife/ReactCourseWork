import React from 'react';
import Person from './Person/Person';


const Persons = (props) => props.persons.map(
    p => {
        return <Person
            delete={() => props.delete(p.id)}
            name={p.name}
            age={p.age}
            key={p.id}
            changed={event => props.nameChanged(event, p.id)}
        />
    }
);

export default Persons;