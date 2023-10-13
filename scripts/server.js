const express = require('express');
const app = express();
const port = process.env.PORT || 5500;

const path = require('path');

const users = [
  { username: 'teste', password: 'teste@' }
  // Adicione mais usuários conforme necessário
];

app.use(express.urlencoded({ extended: false }));

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/index', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Adicione um parâmetro de autenticação à URL
    res.redirect(302, '/main.html?authenticated=true');
  } else {
    res.redirect('/index.html');
  }
});

app.get('/main.html', (req, res) => {
  const isAuthenticated = req.query.authenticated === 'true';

  if (isAuthenticated) {
    res.sendFile(path.join(__dirname, 'public/main.html'));
  } else {
    res.redirect('/index.html');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
