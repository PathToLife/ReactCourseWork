import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from './../../../hoc/Auxillary';
import withClass from '../../../hoc/withClassFunction';

import AuthContext from '../../../context/auth-context';


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

    // React Class based context assignment, but unlike function components,
    // You can only set one context to be access by functions this way.
    // There are work around by wrapping this component with a HOC, but that's quite ugly
    // must be named contextType and be static
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        // Access Context this way
        // console.log(this.context.authenticated);
    }

    //console.log('[Person.js] Rendering...');
    render() {
        return (
            <Aux>
                {/*<AuthContext.Consumer>*/}
                {/*    {(context) => {*/}
                {/*        return (<div>{context.authenticated ? "Logged In" : "Please Login"}</div>);*/}
                {/*    }}*/}
                {/*</AuthContext.Consumer>*/}
                <div>{this.context.authenticated ? "Logged In" : "Please Login"}</div>

                <span>I'm {this.props.name} and I am {this.props.age} years old.</span>
                <br/>
                <input
                    type="text"
                    //ref={(inputElement) => {this.inputElement = inputElement}} // Older version of setting reference
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