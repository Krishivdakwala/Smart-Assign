import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getAssignments, createAssignment } from '../api';
import { Link } from "react-router-dom";
import LeftDrawer from "../components/LeftDrawer";
import { Container, Card, Button } from "react-bootstrap";
import './StudentAssignment.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: { 
      marginRight: theme.spacing(1),
    },
    add_btn: {
      position: 'sticky',
      bottom: '400px',
      right: '500px',
    },
  }));

export default function TeacherAssignments() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getAllAssignments = async () => {
        let data = await getAssignments();
        setData(data);
        console.log("array: ", data);
      };
    

    useEffect(() => {
        getAllAssignments();
    }, [])
      
    return (
        <div>
          <div>
            <LeftDrawer />
          </div>

          <Container
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{ minHeight: "85vh"}}
          >
            {data.map((assi, i) => (
                
                <Card className="styles.assn" bsPrefix="assn">
                <Card.Body>
                  <Card.Title className="styles.assntext" bsPrefix="assntext" key={i}>
                    Subject: {assi.name}
                  </Card.Title>
                  <Card.Text className="styles.assntext" bsPrefix="assntext" key={i}>
                    Assignment: {assi.name}
                  </Card.Text>
                  <Card.Text className="styles.assntext" bsPrefix="assntext" key={i}>
                    Questions: {assi.questions}
                  </Card.Text>
                  <Card.Text className="styles.assntext" bsPrefix="assntext" key={i}>
                    Due Date: {assi.due_date}
                  </Card.Text>
                  <Link key={i} to={`/SubmitAssignment/${assi.name}`}>
                    <Button>View Assignment</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}   

          </Container>  
        </div>
    )
}

