var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'articleOne',
        heading : 'Death Note',
        content : `
            <p class="center text-big bold">
                <h1>WE ARE ALL EQUAL IN THE EYES OF THE REAPER.</h1>
            </p>
            <br><br>
            <div class="center">
                <img src="https://img1.etsystatic.com/154/1/9820149/il_340x270.1141813627_brud.jpg" class="img-medium"/>
            </div>`
    },
    'article-two' : {
        title : 'articleTwo',
        heading : 'LIGHT YAGAMI',
        content : `
            <p class="center text-big bold">
                <h1>Bored<br>Cunning<br>Secretive<br>Intelligent<br>Double-sided<br>Manipulative</h1>
            </p>
            <br><br>
            <div class="center">
                <img src="http://superfunnyquotes.com/images/460776/ws8_light_death_note_quo.jpg" class="img-medium"/>
            </div>`
    },
    'article-three' : {
        title : 'articleThree',
        heading : 'L',
        content : `
            <p class="center text-big bold">
                <h1>Calm<br>Thoughtful<br>Misunderstood<br>Determined<br>Confident<br>Kind-hearted<br>Different</h1>
            </p>
            <br><br>
            <div class="center">
                <img src="http://cdn.quotesgram.com/img/96/62/489100441-922_L.jpg" class="img-medium"/>
            </div>`
    }
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

app.get('/:articleName', function(req,res) {
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));   
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
