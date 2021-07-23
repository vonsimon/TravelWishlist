import express from 'express';
import countries from './countries.js'

const app = express();
const port = process.env.PORT || 5000;

// RESTful API 
const getAllCountries = (req, res) => {
    // get data from somewhere else
    res.json(countries)
}
// res.send() set the content-type header to text/html, res.json() sets the content-type header to application/json


app.get("/api/countries", getAllCountries);
app.post('/', (req, res) => res.send('POST'));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));