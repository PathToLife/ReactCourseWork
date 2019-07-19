import React from 'react';
import classes from './Person.module.css';


/**
 * Component using css modules.
 * It targets a component specifically by generating a unique class names
 * Thus preventing similar classNames from inheriting each others undesired styles.
 */

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <span>I'm {props.name} and I am {props.age} years old.</span>
            <br/>
            <input type="text" onChange={props.change} value={props.name}/>
            <button className={classes.delete} onClick={props.delete}>X</button>
            <div className={classes.id}>ID/Key: {props.id}</div>
        </div>
    )
};

export default Person;