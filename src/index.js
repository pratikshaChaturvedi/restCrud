let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
require('dotenv').config();
let app = express();
let apiRoutes = require("./router/api-routes");
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
mongoose.connect(
    process.env.uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    }
  );
// mongoose.connect('mongodb://localhost/myDb', { useNewUrlParser : true, useUnifiedTopology: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting to db");
else
    console.log("DB connected successfully");
var port = process.env.PORT ;
app.get('/', (req,res) => res.send('Express server up with nodemon'));
app.use('/api', apiRoutes);
app.listen(port, function() {
    console.log("Running restcrud on port " +port);
});