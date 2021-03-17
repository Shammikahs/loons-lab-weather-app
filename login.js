firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
        alert("active user" + email);
        window.open("index.html");
        window.close();

    } else {
        alert("no user")
    }

})

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

function logout() {
    alert("logged out");
    window.close();
    firebase.auth().signOut();


}