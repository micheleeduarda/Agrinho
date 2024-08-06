const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Express para usar EJS como template engine
app.set('view engine', 'ejs');

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Do Campo à Cidade' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Sobre o Tema' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
