const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors

const handleErrors = (err) => {
    console.log(err.message, err.code);

    let errors = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    // Duplication errors
    if (err.code === 11000) {
        errors.email = "This email is already registered";
        return errors
    }

    // login errors
    if (err.message === "Incorrect Email") {
        errors.email = 'Email is not registered on this platform'
    }
    if (err.message === "Incorrect Password") {
        errors.password = err.message
    }

    // validatioon errors
    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }    

    return errors;
};

const maxAge = 7 * 24 * 60 * 60;

// create json web token 
const createToken = (id) => {
    return jwt.sign({ id }, 'study to show yourself approved', { expiresIn: maxAge });
}

module.exports.signup_get = (req, res) => {
    res.render('signup', {
        title: 'Sign Up',
        heading: 'Sign Up'            
    });
};

module.exports.login_get = (req, res) => {
    res.render('login', {
        title: 'Log In',
        heading: 'Log In'            
    });
};

module.exports.signup_post = async (req, res) => { 
    const { email, password, firstName, lastName } = req.body;

    try{
        const user = await User.create({ email, password, firstName, lastName });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge *1000 })
        res.status(201).json({ user: user.firstName });
    }
    catch (err) {
       const errors = handleErrors(err);
       res.status(400).json({ errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge *1000 })
        res.status(200).json({user: user.firstName});
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }

};

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}