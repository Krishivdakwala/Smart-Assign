import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getAssignments, createAssignment } from '../api';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: { 
      marginRight: theme.spacing(1),
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
         {data.map((assi, i) => (
             <h1 key={i}>{assi.name}</h1>
         ))}   
            <div className={classes.root}>
                <Fab color="primary" href="/createAssignment" aria-label="add">
                <AddIcon />
                </Fab>
            </div>
            
        </div>
    )
}

