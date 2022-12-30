const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send("Funcionando")
});

app.get('/teste', (req, res) => {
	console.log('yurizão pipoquiro')
	res.send(req.body)
})
app.post('/teste', (req, res) => {
	console.log(req.body)
	res.send(req.body)
	res.status(200)
})

require('./app/controlers/index')(app);

app.listen(3000, () => console.log('server is runing http://localhost:3000'))