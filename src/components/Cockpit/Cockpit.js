import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';


const log = (...args) => console.log('[Cockpit.js]', ...args);

const Cockpit = (props) => {

    useEffect(() => {
        log('run once');

        return () => {
            log('run on unmount');
        }
    }, []);

    useEffect(() => {
        log('run on props.persons change only');

        // Http request faking
        const timer = setTimeout(() => {
            // alert('Saved Data to Cloud');
        }, 1000);

        return () => {
            // Don't send a request if this function is spammed, only on the last call
            clearTimeout(timer);
        }
    }, [props.persons]);

    const assignedClasses = [];

    if (props.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    log('rendering');

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


// Memo only re-renders the component if the props change
export default React.memo(Cockpit);