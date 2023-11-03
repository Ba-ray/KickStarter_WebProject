const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Register
router.post("/register" , async(req,res)=>{
    try{
        const {username , email , password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hashSync(password , salt)
        const newUser = new User({username , email , password: hashedPassword})
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})


router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }); //find user by username

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password); //compare hash

            if (passwordMatch) {
                res.status(200).json({ message: "Login successful" });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});



module.exports = router