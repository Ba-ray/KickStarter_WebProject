const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Register
router.post("/register", async (req, res) => {
    try {
        const { username, password, confirmpassword, email, firstname, lastname, age_range, phone } = req.body;

        // Add validation checks for required fields and proper formats
        if (!username || !password || !confirmpassword || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Ensure that the entered password matches the confirmed password
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists." });
        }

        // Check if the email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists." });
        }

        // Asynchronous hashing using bcrypt.hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new User instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            firstname,
            lastname,
            age_range,
            phone
        });

        // Save the new user to the database
        const saveUser = await newUser.save();

        res.status(200).json(saveUser);
    } catch (err) {
        console.log(err);
        // Provide more specific error messages for better debugging
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
                // Generate JWT token with user information
                const token = jwt.sign(
                    {
                        username: user.username,
                        email: user.email,
                        // Add other fields as needed
                    },
                    'bchjidhifawf7629otrhgui3n398742ctc273ny40x203f78h3n5780ctvchc', // Replace with your actual secret key
                    { expiresIn: '1h' } // Token expiration time (e.g., 1 hour)
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

