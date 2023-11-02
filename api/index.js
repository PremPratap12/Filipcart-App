const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const User = require('./models/user');

//username:password@hostname:port/database

mongodb: mongoose
    .connect(
        'mongodb+srv://sivaaysingh00:sivaay123@cluster0.irohzhj.mongodb.net/',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Enter connecting to MongoDB', err);
    });

app.listen(port, () => {
    console.log('Server is running on part 8000');
});

//function to send Verification Email to the user
const sendVerificationEmail = async (email, verificationTocken) => {
    //create a nodemailer transport
    const transport = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth: {
            user: "prempratap00@gmail.com",
            pass: ""
        }
    })

    //compose the email message
    const mailOptions = {
        from: "amazon.com",
        to: email,
        subject: "Email Verification",
        text: `Please click the following link to verify your email : http://localhost:8000/verify/${verificationTocken}`
    }

    //send the email 
    try {
        await transport.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending verification email", error)
    }
}


//endpoint to register in the app
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //ckeck if the email is already registered
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" })
        }

        //create a new User
        const newUser = new User({ name, email, password })

        //generate and store the verification tocken
        newUser.verificationTocken = crypto.randomBytes(20).toString("hex")

        //save the user to the database
        await newUser.save()

        //send verification email to  the user 
        sendVerificationEmail(newUser.email, newUser.verificationTocken)
    } catch (error) {
        console.log("error registration user", error);
        res.status(500).json({ message: "Registration failed" })
    }
})


//endpoint to verify email 
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token

        //Find the user with the given verification token
        const user = await User.findOne({ verificationTocken: token })
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" })
        }

        //mark the user as verified
        user.verified = true
        user.verificationTocken = undefined

        await user.save()

        res.status(200).json({ message: "Email verified successfully" })
    } catch (error) {
        res.status(500).json({ message: "Email Verification Failed" })
    }
})