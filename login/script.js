document.getElementById('login-form').addEventListener('submit', function(event){event.preventDefault()
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    //Simulação de validação de login
    if (username === 'holehon@unievangelica.edu.br' && password === '1234'){
        document.getElementById('mensagem').innerText = 'login bem sucedido' 
    }
    else {
        document.getElementById("mensagem").innerText = 'Login falhou'
}
})
