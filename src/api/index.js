import { firestoreInstance, fireStorage } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

/*
  fetches specific student data according to email from firebase
*/ 

export const getStudentData = async (email) => {
  console.log("email", email);
  return (
    firestoreInstance
      .collection("students")
      .doc(email)
      //.where("id", "==", email.toString())
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
  );
};

/*
  creates a new document in students collection 
  takes name, points and  submitted assignments of
  the student.
  If it is a teacher, the teacherCheck flag is set to true
*/
export const createUser = ({ UID, name, teacherCheck }) => {
  console.log(UID);
  firestoreInstance
    .collection("students")
    .doc(UID)
    .set({
      name: name,
      points: 0,
      teacherCheck: teacherCheck,
      assignments: [],
      id: UID,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

/*
  function to upload pdf file to firebase storage 
  directory according to student's email and assignmnt 
*/

export const uploadFile = ({ file, assignment, email }) => {
  let ref = fireStorage.ref(email + "/" + assignment + ".pdf");

  ref
    .put(file)
    .then((snapshot) => {
      console.log("uploaded: " + assignment + ".pdf");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

/*
  fetch file from firebase storage according to student email and assignment
*/

export const getFile = ({ email, assiName }) => {
  let ref = fireStorage.ref(`${email}/${assiName}.pdf`);
  //.child(`${email}/${assiName}.pdf`)

  return ref
    .getDownloadURL()
    .then((url) => {
      console.log("file fetched: ", url);
      return url;
    })
    .catch((error) => {
      
      return "error";
    });
};


/*
 *update student's total points and add checked assignments in the assignment array 
 */

export const upDateStudentPoints = async ({
  email,
  points,
  remark,
  assiName,
}) => {
  let data = await getStudentData(email);
  let assiArray = data.assignments;

  assiArray.push({
    name: assiName,
    score: points,
    remark: remark,
  });

  console.log("pls work: ", assiArray);
  console.log("terageted student: ", email);

  return (
    firestoreInstance
      .collection("students")
      .doc(email)
      //.where("id", "==", email.toString())
      .set({
        name: data.name,
        points: (data.points ? data.points : 0) + points,
        assignments: assiArray,
        id: email,
      })
      .then(() => {
        console.log("points updated successfully");
      })
      .catch((err) => {
        console.log(err);
      })
  );
};

/*
  create a new assignment by teacher
  specify due_date, name, subject and questions
*/

export const createAssignment = ({ name, subject, due_date, questions }) => {
  console.log(name);
  firestoreInstance
    .collection("Assignments")
    .doc(name)
    .set({
      name: name,
      subject: subject,
      due_date: due_date,
      questions: questions,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

/*
  get details for a specific assignment
  name, subject, due_date, questions
*/

export const getAssignmentData = async (Name) => {
  console.log("Name", Name);
  return (
    firestoreInstance
      .collection("Assignments")
      .doc(Name)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data();
        } else {
        
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
  );
};

/*
  get all assignments from the Assignments collection
*/

export const getAssignments = async () => {
  let arrayAssi = [];

  return firestoreInstance
    .collection("Assignments")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        arrayAssi.push(doc.data());
      });
      //console.log("arrayAssi: ", arrayAssi);
      return arrayAssi;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

/*
  get all documents from student Collection
 */

export const getStudents = async () => {
  let arrayStudents = [];

  return firestoreInstance
    .collection("students")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        arrayStudents.push(doc.data());
      });
      //console.log("arrayAssi: ", arrayAssi);
      return arrayStudents;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

/*
  get the top 3 students from students collection
  according to points
*/

export const getTopPoints = async () => {
  let arrayStudents = [];

  return firestoreInstance
    .collection("students")
    .orderBy("points", "desc")
    .limit(3)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        arrayStudents.push(doc.data());
      });
      
      return arrayStudents;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};
