
const express = require('express');
const cors = require('cors');
const api = require('./routes/api');
const app = express();
const port = 8080; app.use(cors()); 


app.use('/api', api);


/*
app.get('/'): 
Hier wird eine HTTP-GET-Anfrage auf der Wurzelroute ("/") definiert. 
Das bedeutet, dass, wenn jemand die Haupt-URL der Website besucht (z.B. http://www.example.com/), dieser Codeblock ausgeführt wird.
*/

app.get('/', (req, res) => {
res.send('Hello von Express');
});


app.listen(port, () => {
console.log(`Server läuft auf Port ${port}`);
});