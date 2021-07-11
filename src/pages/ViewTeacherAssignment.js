//This page shows the students who have submitted the particular assignment selected
//A teacher selects an assignment on TeacherAssignment page which redirects the page to this page


import React from "react";
import { useEffect, useState } from "react";
import { getStudents } from "../api";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import LeftDrawer from "../components/LeftDrawer";
import { FastRewind } from "@material-ui/icons";

export default function ViewTeacherAssignment(props) {
  const [assignmentName, setAssignmentName] = useState("");

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
  }, []);

  const doneAssignemnt = ({ asArray, asName }) => {
    for (var i = 0; i < asArray.length; i++) {
      console.log("entry: ", asArray[i].name, "asName: ", asName);
      if (asArray[i].name === asName) {
        console.log("ret true ", asArray[i].name, " ", asName);
        return true;
      }
    }
    console.log("ret false");
    return false;
  };

  return (
    <div>
      <div>
        <LeftDrawer />
      </div>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <Table
          style={{ maxWidth: "800px" }}
          striped
          bordered
          hover
          variant="dark"
        >
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Assignment</th>
          </tr>

          {data.map(
            (Student, i) =>
              !Student.teacherCheck &&
              !doneAssignemnt({
                asArray: Student.assignments,
                asName: assignmentName,
              }) && (
                <tr>
                  <td>{Student.name}</td>
                  <td>Status</td>
                  <td>
                    <Link
                      key={i}
                      to={`/TeacherForm/${Student.id}/${assignmentName}`}
                    >
                      Click Here
                    </Link>
                  </td>
                </tr>
              )
          )}
        </Table>
      </Container>
    </div>
  );
}
