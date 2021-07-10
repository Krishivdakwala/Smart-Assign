import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import { uploadFile, getAssignmentData } from "../api";

export default function SubmitAssignment(props) {
    const { currentUser, logout } = useAuth();
    const [data, setData] = useState({subject:"",name:"",due_date:"",questions:""});
    

    const[assignmentName, setAssignmentName] = useState("");

    const getAssignment = (assigName) => {
        getAssignmentData(assigName)
          .then((data) => {
            setData(data);
            console.log("Sub", data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(() => {
        const assigName = props.match.params.assignmentName;
        setAssignmentName(assigName);
        getAssignment(assigName);
      }, []);

      const handleFile = (event) => {
        let value;
        value = event.target.files[0];
    
        uploadFile({ file: value, email: currentUser.email, assignment: assignmentName });
      };

    return (
        <div>
          <h1>{assignmentName}</h1>
          <h2>{data.subject}</h2>
          <h2>{data.due_date}</h2>
          <h2>{data.questions}</h2>
          <div>
              <label className="btn btn-secondary">
                <input
                  type="file"
                  onChange={handleFile}
                  name="photo1"
                  accept=".pdf,image/*"
                ></input>
              </label>
            </div>  
        </div>
    )
}
