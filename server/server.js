const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const uploadVideo = require('./routes/uploadVideo')
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(__dirname + '/public'));
app.get('/videos', (req, res) => {
    const publicFolderPath = path.join(__dirname, 'public', 'videos');

    fs.readdir(publicFolderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
    
            res.json({ files });
        }
    });
});
app.use('/upload/', uploadVideo)
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});