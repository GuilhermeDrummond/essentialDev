function entrar () {
    let email = document.getElementById("e-mail"); 
    let password = document.getElementById("senha");
    if(email.value && password.value) {
        window.location.href = "index.html"
    }
}