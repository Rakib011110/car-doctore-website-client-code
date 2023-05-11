// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL__5eWzZ-XuDlWdO3qPBZzv4DgmoTFYc",
    authDomain: "car-doctor-website.firebaseapp.com",
    projectId: "car-doctor-website",
    storageBucket: "car-doctor-website.appspot.com",
    messagingSenderId: "167089587973",
    appId: "1:167089587973:web:089554c4ab3368bac8996c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app