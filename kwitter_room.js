
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

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"  
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}