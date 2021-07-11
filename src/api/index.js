import { firestoreInstance, fireStorage } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

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
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      return "error";
    });
};

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

export const getAssignmentData = async (Name) => {
  console.log("Name", Name);
  return (
    firestoreInstance
      .collection("Assignments")
      .doc(Name)
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

export const getTopPoints = async () => {
  let arrayStudents = [];

  return firestoreInstance
    .collection("students")
    .orderBy("points", "desc")
    .limit(3)
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
