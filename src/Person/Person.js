import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <span>I'm {props.name} and I am {props.age} years old.</span>
            <br/>
            <input type="text" onChange={props.change} value={props.name}/>
            <button className="delete" onClick={props.delete}>X</button>
            <div className="id">ID/Key: {props.id}</div>
        </div>
    )
};

export default Radium(Person);