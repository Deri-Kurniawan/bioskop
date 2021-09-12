const express = require('express');
const app = express();
const settings = {
    port: 3000
}

// Middleware
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({
    extended: true,
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home",
    });
});

app.get('/movie', (req, res) => {
    res.render('movie', {
        title: "Movie",
    });
});

app.use(express.static(__dirname + '/node_modules/bootstrap-icons/font'));

// app.use('/', (req, res) => {
//     res.sendStatus(404);
//     res.end('Page Not Found!');
// });


// Server Listener
app.listen(settings.port, () => {
    console.log(`Server Listening on http://localhost:${settings.port}`);
});