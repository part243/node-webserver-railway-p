//importa express, colors, express, dotenv
const hbs = require('hbs');
const express = require('express');
const colors = require('colors');
require('dotenv').config();

//inicializa express
const app = express();
//configura el puerto
//cargar variable de dotenv

//configura el puerto
port = process.env.PORT;


//configura la carpeta publica
app.use(express.static('./public'));

// //utiliza handlebars, parciales en handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

//renderizar una vista con handlebars llamada home
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Alejandro Macías',
        titulo: 'Curso de Node'
    });
});


app.get('/generic', (req, res) => {
            res.render('generic',{
                nombre: 'Alejandro Macías Lara',
                titulo: 'Curso de Node js deplyment'
            });
    });

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Alejandro Macías',
        titulo: 'Curso de Node'
    });
});



//sendfile 404 para cualquier otra ruta
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404/src/index.html');
});

//mensaje en consolacon colors amarillo donde indique que esta corriendo en el puerto ..
app.listen(port, () => {
    console.log(`Escuchando en el puerto ` + `${port}`.yellow);
});