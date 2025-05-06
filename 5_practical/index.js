const dbConnect = require('./mongodb'); // custom module to connect to MongoDB
const express = require('express');
const app = express();

// GET API
app.get('/', async (req, res) => {
    try {
        const db = await dbConnect(); // connect to DB
        const result = await db.find().toArray(); // fetch all documents
        res.send(result);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.use(express.json()); // to handle JSON body

app.post('/add', async (req, res) => {
    try {
        const db = await dbConnect();
        const result = await db.insertOne(req.body); // insert data from request
        res.send(result);
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Internal Server Error');
    }
});


// Listen on a different port (in case 3000 is busy)
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
