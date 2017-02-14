var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title : 'articleOne',
  heading : 'Death Note',
  content : `
        <div class="center">
            <img src="https://img1.etsystatic.com/154/1/9820149/il_340x270.1141813627_brud.jpg" class="img-medium"/>
        </div>
        <br><br>
        <p class="center text-big bold">
            <h1>WE ARE ALL EQUAL IN THE EYES OF THE REAPER.</h1>
        </p>`
};


function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name='viewport' content='width=device-width , initial-scale=1' />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class='container'>
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${content}
            </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res) {
 res.send(createTemplate(articleOne));   
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
