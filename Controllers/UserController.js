const Users = require('../Model/user');

exports.index = async (req, res, next) => {
    try {
        const users = await Users.find({});
        return res.send(users);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).send({ error: 'Insulficient Data' })

    try {
        if(await Users.findOne({ email })) return res.status(400).send({ error: 'User already exists!' })

        const user = await Users.create(req.body);
        user.password = undefined;

        return res.status(201).send({ user, token: createUserToken(user.id) });
    } catch (error) {
        return res.status(500).send({ error: 'Error to find User!' });
    }
}

exports.update = async (req, res, next) => {
    let id = req.params.id;

    Users.findOneAndUpdate({ id }, req.body, { upsert:true }, function(err, user){
        if (err) return res.send(500, { error: err });
        return res.send({ user });
    });
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    Users.remove({ id }, function(err) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('Deleted!');
    });
}