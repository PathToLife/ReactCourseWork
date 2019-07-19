import React from 'react';
import classes from './Cockpit.modules.css';

const Cockpit = (props) => {

    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.Cockpit}>
            <h1>Hello, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is a real app</p>
            <button
                onClick={props.togglePersons}>
                Toggle Persons
            </button>
        </div>
    )
};

export default Cockpit;