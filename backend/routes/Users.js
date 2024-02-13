const express = require('express')
const router = express.Router()
const { Users } = require('../models')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

router.get("/",   async (req,res)=>{
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
    });

router.post("/new-user", async (req,res)=> {

    const user = req.body;

    //Checking if the user is already in the database
    const emailExist = await Users.findOne({where:{emailid: user.emailid}});
    //console.log(emailExist)
    if(emailExist!=null) return res.status(400).json({
        "status" : false,
        "message" : "email already exists"
    });

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    user.password = hashedPassword;

    try{
        const savedUser = await Users.create(user);
        res.json({"message":"New user : "+user.emailid+" has been created!"});
    }catch(err){
        res.status(400).json({"message":err});
    }
    })

router.post("/login", async (req,res)=> {

    let request = req.body;

    //Checking if the user is already in the database
    const user = await Users.findOne({where:{emailid: request.emailid}});
    if(user==null) return res.status(400).json({
        "status" : false,
        "message" : "username does not exist"
    });

    //Check if the password is correct
    const validPass = await bcrypt.compare(request.password, user.password);
    if(!validPass) return res.status(400).json({
        "status" : false,
        "message":'Invalid password'
    });


     //Create and assign a token
     const token = jwt.sign({id: user.id}, "vgesgvsrgvvsg",{expiresIn: '1h'});
     res.header('auth-token',token).json({
        "status" : true,
        "JWT_token" : token,
        "message" : "Login successful",
        "username" : user.username,
        "email" : user.emailid
     });
    })

module.exports = router