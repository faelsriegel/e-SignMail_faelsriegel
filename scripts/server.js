const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const path = require('path');
const session = require('express-session');

const users = [
  { username: 'teste', password: 'teste@' }
  // Adicione mais usuários conforme necessário
];

app.use(express.urlencoded({ extended: false }));

// Configuração de sessão
app.use(session({
  secret: 'sua_chave_secreta', // Substitua por uma chave secreta segura
  resave: false,
  saveUninitialized: true,
}));

// Rota para a página de login
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Rota para processar o formulário de login
app.post('/index', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Defina a sessão como autenticada
    req.session.authenticated = true;
    res.redirect(302, '/main.html'); // Redirecionamento com status code 302
  } else {
    res.redirect('/index.html');
  }
});

// Rota para a página principal (protegida)
app.get('/main.html', (req, res) => {
  // Verifique se o usuário está autenticado usando a sessão
  if (req.session.authenticated) {
    res.sendFile(path.join(__dirname, 'public/main.html'));
  } else {
    res.redirect('/index.html');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
