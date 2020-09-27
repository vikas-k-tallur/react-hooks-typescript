let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let apiPort = 8101;

let mock = {
  userData: require('./data/user'),
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  const user = mock.userData.users.find(userInfo => userInfo.email === email && userInfo.password === password);
  setTimeout(function(){ 
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res
        .status(401).send({
          "error": "Invalid username or password"
        });
    }
  }, 3000);
});


app.listen(apiPort, function() {
  console.log('Express server listening on port ' + apiPort);
});
