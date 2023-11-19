const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Register
router.post("/register", async (req, res) => {
    try {
        const { username, password, confirmpassword, email, firstname, lastname, age_range, phone, aboutMe } = req.body;

        if (!username || !password || !confirmpassword || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists." });
        }


        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            firstname,
            lastname,
            age_range,
            phone,
            aboutMe
        });

        const saveUser = await newUser.save();

        res.status(200).json(saveUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});




router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign(
                    {
                        userId: user._id,
                        username: user.username,
                        email: user.email,
                    },
                    'bchjidhifawf7629otrhgui3n398742ctc273ny40x203f78h3n5780ctvchc', 
                    { expiresIn: '1h' } // Token expiration time (1 hour)
                );

                res.status(200).json({ message: "Login successful", token });
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



