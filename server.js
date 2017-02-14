var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
  title : 'articleOne',
  heading : 'Death Note',
  content : 'WE ARE ALL EQUAL IN THE EYES OF THE REAPER.'
};

var htmlTemplate = {
    <html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center">
            <img src="https://img1.etsystatic.com/154/1/9820149/il_340x270.1141813627_brud.jpg" class="img-medium"/>
        </div>
        <br>
        <div class="center text-big bold">
            Working hard is important.<br> 
            But there is something that matters more:<br>
            <h1>BELIEVING IN YOURSELF</h1>
                        -Harry Potter
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
