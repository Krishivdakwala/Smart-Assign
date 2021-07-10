import React from 'react'
import { useEffect, useState } from 'react'
import { getStudents } from '../api';
import { Link } from 'react-router-dom';

export default function ViewTeacherAssignment(props) {

    const[assignmentName, setAssignmentName] = useState("");

    const [data, setData] = useState([]);

    const getAllStudents = async () => {
        let data = await getStudents();
        setData(data);
        console.log("array: ", data);
      };
    

    useEffect(() => {
        getAllStudents();
        const assiName = props.match.params.assignmentName;
        setAssignmentName(assiName);
    }, [])


    return (
        <div>
            {data.map((Student, i) => (
            <Link key={i} to={`/TeacherForm/${Student.id}/${assignmentName}`}>
                <h1 >{Student.name}</h1>
            </Link>
            ))}   
        </div>
    )
}
