
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        const user = loginForm.querySelector('input[type="text"]').value;
        const inputPassword = loginForm.querySelector('input[type="password"]').value;

        // Verifique as credenciais de usuário e senha
        if (user === "admin" && inputPassword === "stratus") {
            // Credenciais corretas, redirecione para a página principal
            window.location.href = "views/main.html";
        } else {
            // Credenciais incorretas, exiba uma mensagem de erro
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});