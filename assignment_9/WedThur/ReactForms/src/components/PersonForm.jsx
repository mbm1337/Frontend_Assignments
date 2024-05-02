import React, {useState,useEffect} from 'react';
import '../App.css';

const PersonForm = ({setUpdated,onEdit,setOnEdit,personId,setPersonId}) => {
    const [person, setPerson] = useState({id:'',name: '', age: '',email: '',gender: ''});

    const handleSubmit = (e) => {

        if(onEdit) {
            fetch("http://127.0.0.1:3000/api/" + personId, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            }).then(() => {
                console.log("Person updated");
            });
            setUpdated(true);
            setOnEdit(false);
            e.target.reset();
            return;
        }
        e.preventDefault();
        fetch("http://127.0.0.1:3000/api", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        }).then(() => {
            console.log("Person added");
        });
        setUpdated(true);
        e.target.reset();
    }

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.id]: e.target.value
        });
    }

    const handleReset = (e) => {
        setOnEdit(false);
        setPerson({id:'',name: '', age: '',email: '',gender: ''});
        e.target.reset();
    }

    useEffect(() => {
        if(!onEdit) return;
        fetch("http://127.0.0.1:3000/api/" + personId)
        .then(response => response.json())
        .then(data => {
            setPerson(data);
        });
    }, [onEdit]);

    
    



    return (
        
        <div>
            <h2>{onEdit ? 'Edit Person' : 'Add Person'}</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="name">Name</label>
                <input id="name" value={person.name} type="text" placeholder="name" onChange={handleChange} />
                <br />
                <label htmlFor="age">Age</label>
                <input id="age" value={person.age} type="number" min="1" max="120" placeholder="age" onChange={handleChange} />
                <br />
                <label htmlFor="email">Email</label>
                <input id="email" value={person.email} type="email" placeholder="email" onChange={handleChange} />
                <br />
                <label htmlFor="gender">Gender</label>
                <select id="gender" onChange={handleChange}>
                    <option defaultChecked>{onEdit ? person.gender :'Select Gender'}</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <div>
                <button type="submit">{onEdit ? 'Edit' : 'Add'}</button>
                <button type="reset">Cancel</button>
                </div>
            </form>

        </div>
    );
};

export default PersonForm;