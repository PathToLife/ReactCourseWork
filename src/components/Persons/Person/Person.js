import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from './../../../hoc/Auxillary';
import withClass from '../../../hoc/withClassFunction';

import PropTypes from 'prop-types';

/**
 * Component using css modules.
 * It targets a component specifically by generating a unique class names
 * Thus preventing similar classNames from inheriting each others undesired styles.
 */

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }


    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    //console.log('[Person.js] Rendering...');
    render() {
        return (
            <Aux>
                <span>I'm {this.props.name} and I am {this.props.age} years old.</span>
                <br/>
                <input
                    type="text"
                    //ref={(inputElement) => {this.inputElement = inputElement}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                <button className={classes.deleteButton} onClick={this.props.delete} about="remove person">X</button>
                <div className={classes.id}>ID/Key: {this.props.id}</div>
            </Aux>
        );
    }
}

Person.propTypes = {
    delete: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    id: PropTypes.string
};

export default withClass(Person, classes.Person);