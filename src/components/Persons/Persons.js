import React, {Component} from 'react';
import Person from './Person/Person';


const log = (...args) => console.log('[Persons.js]', ...args);

class Persons extends Component{

    // static getDerivedStateFromProps(props, state) {
    //     print('getDerivedStateFromProps');
    //     return state;
    // }

    componentDidMount() {
        log('Mounted')
    }

    componentWillUnmount() {
        log('Unmounted');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        log('shouldComponentUpdate');

        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        log('getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log('componentDidUpdate');
        log(snapshot)
    }

    render() {
        return this.props.persons.map(
            p => {
                return <Person
                    delete={() => this.props.delete(p.id)}
                    name={p.name}
                    age={p.age}
                    key={p.id}
                    id={p.id}
                    changed={event => this.props.nameChanged(event, p.id)}
                />
            }
        );
    }
}
export default Persons;