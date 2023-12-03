const express = require("express");
const app = express();
const hostName = "127.0.0.1";
const PORT = 7000;

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static("./public"));
//parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/people',people)
app.use('/login',auth)


app.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
