const express = require('express')
const app = express()
const port = 5000
const mongoDBconnect =require("./db");

 mongoDBconnect();

 app.use((req,res,next)=>{
  res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  next();
 })
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})