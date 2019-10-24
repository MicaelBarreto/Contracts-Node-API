const Users = require('../Model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.index = async (req, res, next) => {
    try {
        const users = await Users.find({});
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).send({ error: 'Insulficient Data' });

    try {
        if(await Users.findOne({ email })) return res.status(400).send({ error: 'User already exists!' });

        await bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if(err) return res.status(500).send({ error: err });
            req.body.password = hash;
        });

        const user = await Users.create(req.body);
        user.password = undefined;

        return res.status(201).send({ user, token: createUserToken(user.id) });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Error to create User!' });
    }
}

exports.update = async (req, res, next) => {
    let _id = req.params.id;

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        if(err) return res.status(500).send({ error: err });

        req.body.password =  hash;
        
        Users.findOneAndUpdate({ _id }, req.body, { upsert:true }, function(err, user){
            if (err) return res.status(500).send({ error: err });
            return res.status(200).send({ user });
        });
    });  
}

exports.delete = async (req, res, next) => {
    let _id = req.params.id;

    Users.remove({ _id }, function(err) {
        if (err) return res.status(500).send({ error: err });
        return res.status(200).send('Deleted!');
    });
}