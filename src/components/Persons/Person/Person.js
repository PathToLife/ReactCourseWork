import React from 'react';
import classes from './Person.module.css';
import Aux from './../../../hoc/Auxillary';
import withClass from '../../../hoc/withClassFunction';

/**
 * Component using css modules.
 * It targets a component specifically by generating a unique class names
 * Thus preventing similar classNames from inheriting each others undesired styles.
 */

const Person = (props) => {
    //console.log('[Person.js] Rendering...');
    return (
        <Aux>
            <span>I'm {props.name} and I am {props.age} years old.</span>
            <br/>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button className={classes.deleteButton} onClick={props.delete} about="remove person">X</button>
            <div className={classes.id}>ID/Key: {props.id}</div>
        </Aux>
    );
};

export default withClass(Person, classes.Person);