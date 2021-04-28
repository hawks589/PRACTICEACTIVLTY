
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCncYcQAEKc7XZnB-pCTh64lM_2YhhIK4Y",
    authDomain: "test-adc7a.firebaseapp.com",
    databaseURL: "https://test-adc7a-default-rtdb.firebaseio.com",
    projectId: "test-adc7a",
    storageBucket: "test-adc7a.appspot.com",
    messagingSenderId: "378371083641",
    appId: "1:378371083641:web:02fedb86d04d95831c33a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          bird : "hawk"
      }); 
  }