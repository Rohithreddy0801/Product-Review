const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const userRouter = require('./routes/Users');
app.use("/users",userRouter);

const revRouter = require('./routes/Reviews');
app.use('/review',revRouter);


db.sequelize.sync().then(()=>{
    app.listen(9009, ()=>{
        console.log("Server running on port 9009");
    });
})

