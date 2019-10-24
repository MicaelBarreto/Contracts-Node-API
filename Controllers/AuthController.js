const jwt = require('jsonwebtoken');
const config = require('../Config/settings');
const bcrypt = require('bcrypt');
const Users = require('../Model/user');

createUserToken = (userId) => {
    return jwt.sign({ id: userId }, config.jwt, config.expiration);
}

exports.auth = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400).send({ error: 'Insuficient Data!' });

    try {
        const user = await Users.findOne({ email }).select('+password');
        if(!user) return res.statsu(400).send({ error: 'User not found!' });

        const pass_ok = await bcrypt.compare(password, user.password);

        if(!pass_ok) return res.status(401).send({ error: 'Authentication error' });

        user.password = undefined;
        return res.send({ user, token: createUserToken(user.id) });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'There was an error!' });
    }
}