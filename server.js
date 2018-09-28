const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public')); // __dirname === root dir

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Madyan',
    likes: [
      'Biking',
      'Villages'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request.'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
});
