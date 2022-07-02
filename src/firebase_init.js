// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCm_fyE-F2A2JwRVQjDh-VQmbTp3Jgfkd4",
  authDomain:'hotel-app-a2a8f.firebaseapp.com',
  projectId:process.env.REACT_APP_project_Id,
  storageBucket:process.env.REACT_APP_storage_Bucket,
  messagingSenderId:process.env.REACT_APP_messaging_Sender_Id,
  appId:process.env.REACT_APP_app_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth