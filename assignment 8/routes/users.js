const express = require('express')
const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')

//get all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})


//create one user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const nameRegex = /^[a-zA-Z]+('[a-zA-Z]+)? [a-zA-Z]+('[a-zA-Z]+)?$/;
    if (!nameRegex.test(name)) {
        return res.status(400).json({ error: 'Invalid name format' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'Invalid password format' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({ name, email, password: hashedPassword });

    try {
        
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'User creation failed. Email already exists.' });
    }
})

//update
router.put('/', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'Invalid password format' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email can't be changed" });
        }

        user.name = name || user.name;
        user.password = password || user.password;
        await user.save();

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//delete
router.delete('/', async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOneAndDelete({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router