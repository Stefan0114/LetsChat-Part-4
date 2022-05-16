//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA3cczsGf0E0fl17GsnhuwufVlU7isxdMY",
      authDomain: "social-website-kwitter-b784b.firebaseapp.com",
      databaseURL: "https://social-website-kwitter-b784b-default-rtdb.firebaseio.com",
      projectId: "social-website-kwitter-b784b",
      storageBucket: "social-website-kwitter-b784b.appspot.com",
      messagingSenderId: "181973957011",
      appId: "1:181973957011:web:712a0c06715b508b565066"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");


function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                 
                 
            });
      });
}
//Start code

//End code
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}