import React from 'react';
import classes from './Cockpit.module.css';


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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is a react app</p>
            <button
                className={props.showing ? classes.salmon : classes.green}
                onClick={props.togglePersons}>
                {props.showing ? 'Hide' : 'Show'} Persons
            </button>
        </div>
    )
};

export default Cockpit;