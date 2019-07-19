import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';


const log = (...args) => console.log('[Cockpit.js]', ...args);

const Cockpit = (props) => {

    useEffect(() => {
        log('run once');
    }, []);

    useEffect(() => {
        log('run on props.persons change only');

        // Http request faking
        setTimeout(() => {
            alert('Saved Data to Cloud');
        }, 1000)
    }, [props.persons]);

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