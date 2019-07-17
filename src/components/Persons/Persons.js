import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWillReceiveProps', nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdated');

        /**
         * Si la variable actual es diferente a la que teníamos anteriormente, entonces  permitimos al componente
         * actualizarse.
         */
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');

        return {
            message: 'Snapshot!'
        };
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] render');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;