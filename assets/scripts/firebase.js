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
    //   console.log(firebase)

       database = firebase.database();
       ref = database.ref('scores');
       

    ref.on('value', getData, errData);
})

function getData(data) {
    // console.log("calling this")

    return data.val();
    // let scores = data.val();
    // let keys = Object.keys(data.val())
    // for (var i = 0; i < keys.length; i++) {
    //     // var k = keys[i]
    //     console.log(scores[keys[i]].score)
    //     console.log(scores[keys[i]].name)
    // }

}

function errData(err) {
    console.log(err)
}

  function submitScore(score, name) {
    let data = {
        name: name,
        score: score
    }
    ref.push(data);
}
window.database = database;
window.submitScore = submitScore;
window.ref = ref;
// export  {ref, database, submitScore}