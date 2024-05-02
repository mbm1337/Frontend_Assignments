import React, {useState,useEffect} from 'react';

const PersonList = ({updated,setUpdated, setOnEdit,setPersonId}) => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api")
            .then(response => response.json())
            .then(data => {
                setPersons(data);
            });
            if(updated) setUpdated(false);
    }, [updated]);

    const handleDelete = (e) => {
        console.log("Deleted: " + e.target.id);
        
        fetch("http://127.0.0.1:3000/api/" + e.target.id, {
            method: "DELETE"
        }).then(() => {
            console.log("Person deleted");
            setUpdated(true);
            
        });
    }

    const handleEdit = (e) => {
        setOnEdit(true);
        setPersonId (e.target.id);
        console.log("Edit: " + e.target.id);
    }


    return (
        <div>
            <h2>CRUD Demo</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person =>( 
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.email}</td>
                        <td>{person.gender}</td>                                
                        <td>
                            <button onClick={handleEdit} id={person.id}>Edit</button>
                            <button onClick={handleDelete} id={person.id}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonList;