function addroom(){
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       console.log(firebase_message_id)
       console.log(message_data)
       name = message_data('name')
       message = message_data('name')
       like = message_data('message')
       name_with_tag = "<h4>" + name + +"<img class='user_tick' src='tick.png'></h4>"
       like_button ="<button class'btn btn-warning" id="+firebase_message_id"value="+like+"onclick='updateLike(this.id)'>""
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like"
       });});}
    }
    function redirecttoroomname() {
        console.log(name)
        localStorage.setItem("room_name",name)
        window.location = "kwitter_room.html"
    }