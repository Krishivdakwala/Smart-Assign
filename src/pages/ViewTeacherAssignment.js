import React from 'react'
import { useEffect, useState } from 'react'

export default function ViewTeacherAssignment(props) {

    const[assignmentName, setAssignmentName] = useState("");

    useEffect(() => {
        const assiName = props.match.params.assignmentName;
        setAssignmentName(assiName);
    })

    return (
        <div>
            <h1>{assignmentName}</h1>
        </div>
    )
}
