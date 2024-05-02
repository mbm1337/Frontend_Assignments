import React, {useState} from 'react';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import '../App.css';

const PersonApp = () => {

    const [updated, setUpdated] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [personId, setPersonId] = useState();

    return (
        <div className='container'>
            
            <PersonList updated={updated} setUpdated={setUpdated} setOnEdit={setOnEdit} setPersonId={setPersonId} />
            <PersonForm setUpdated={setUpdated} onEdit = {onEdit} setOnEdit = {setOnEdit} setPersonId={setPersonId} personId={personId} />
            
        </div>
    );
};

export default PersonApp;