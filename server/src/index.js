const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Funcionando")
});

require('./controlers/authController')(app);
require('./controlers/projectControler')(app);

app.listen(3000, () => console.log('server is runing http://localhost:3000'))