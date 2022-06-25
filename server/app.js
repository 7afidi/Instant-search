const express = require('express')
var cors = require('cors')

const {getNames } = require('country-list');

const app = express();
app.use(express.json());
app.use(cors());


const countries=getNames();
app.get("/",(req,res)=>{
    const query=req.query.q?.toLowerCase() || '';
    const response =countries.filter((c)=>(
          c.toLowerCase().includes(query)
    ))
    res.send(response);
})


const port =process.env.PORT || 8080
app.listen(port);