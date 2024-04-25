import React from 'react';
import { persons } from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    return (
        <div>
            <h2>Hello, {props.person.firstName}</h2>
            <h2>Lastname: {props.person.lastName}</h2>
            <h2>Email: {props.person.email}</h2>
        </div>
    );
}

function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((p)=> <WelcomePerson key={p.id} person={p}/>)}

        

      </div>
    );
}

export default MultiWelcome;
