var database
var ref;
document.addEventListener("DOMContentLoaded", (event) => {
    var firebaseConfig = {
        apiKey: "AIzaSyBRxgosN3QCs5pd9iz8B0EDZ6arSFUYQic",
        authDomain: "tetris-d3256.firebaseapp.com",
        databaseURL: "https://tetris-d3256.firebaseio.com",
        projectId: "tetris-d3256",
        storageBucket: "",
        messagingSenderId: "618878741823",
        appId: "1:618878741823:web:bd21f21a6dfb480b"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    

       database = firebase.database();
       ref = database.ref('scores');
   
})

export function submitScore(score, name) {
    let data = {
        name: name,
        score: score
    }
    ref.push(data);
}
export function getRef(){
    return ref;
}

export default {submitScore, getRef}