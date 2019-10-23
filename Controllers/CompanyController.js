const Companies = require('../Model/company');

exports.index = async (req, res, next) => {
    try {
        const companies = await Companies.find({});
        return res.send(companies);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { name, cpf, phone, address } = req.body;
    if(!name || !cpf || !phone || !address) return res.status(400).send({ error: 'Insulficient Data' });

    try {
        if(await Companies.findOne({ cpf })) return res.status(400).send({ error: 'User already exists!' });

        const company = await Companies.create(req.body);

        return res.status(200).send({ company });
    } catch (error) {
        return res.status(500).send({ error: 'Error to find compan!' });
    }
}

exports.update = async (req, res, next) => {
    let id = req.params.id;

    Companies.findOneAndUpdate({ id }, req.body, { upsert:true }, function(err, company){
        if (err) return res.send(500, { error: err });
        return res.send({ company });
    });
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    Companies.remove({ id }, function(err) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('Deleted!');
    });
}