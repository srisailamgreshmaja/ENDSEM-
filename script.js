document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields";
    }
    else {
        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("message").innerHTML =
            "Signup Successful!";

        document.getElementById("signupForm").reset();
    }

});