import React from 'react';
import './Person.css';

const Person = (props) => {

    return (
        <div className="Person">
            <span>I'm {props.name} and I am {props.age} years old.</span>
            <br/>
            <input type="text" onChange={props.change} value={props.name}/>
            <button className="delete" onClick={props.delete}>X</button>
            <div className="id">ID/Key: {props.id}</div>
        </div>
    )
};

export default Person;