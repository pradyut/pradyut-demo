import express                   from 'express';
import path from 'path';

const app = express();

app.use(express.static('bin'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

export default app;