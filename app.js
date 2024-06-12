const express = require('express');
const app = express();
const fs = require("fs");

// Deixando o node/express utilizar e ler arquivos html
app.use(express.urlencoded({ extended: true }));

// Definindo pasta de bootstrap para ser utilizado
app.use("/", express.static("./node_modules/bootstrap/dist/"));



app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('login'); // Isso renderiza o arquivo login.ejs da pasta views
});

app.get('/eventos', (req, res) => {
  res.render('eventos'); // Isso renderiza o arquivo login.ejs da pasta views
});

app.get('/comunidade', (req, res) => {
  res.render('comunidade'); // Isso renderiza o arquivo login.ejs da pasta views
});

app.get('/agenda', (req, res) => {
  res.render('agenda'); // Isso renderiza o arquivo login.ejs da pasta views
});

app.get('/sobre', (req, res) => {
  res.render('sobre'); // Isso renderiza o arquivo login.ejs da pasta views
});


app.listen(8000, () => {
    console.log("Servidor iniciado.");
  });