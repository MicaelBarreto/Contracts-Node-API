const Companies = require('../Model/company');

exports.index = async (req, res, next) => {
    try {
        const companies = await Companies.find({});
        return res.status(200).send(companies);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { name, cnpj, phone, address } = req.body;
    if(!name || !cnpj || !phone || !address) return res.status(400).send({ error: 'Insulficient Data' });

    try {
        if(await Companies.findOne({ cnpj })) return res.status(400).send({ error: 'User already exists!' });

        const company = await Companies.create(req.body);

        return res.status(200).send({ company });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: 'Error to create company!' });
    }
}

exports.update = async (req, res, next) => {
    let _id = req.params.id;

    Companies.findOneAndUpdate({ _id }, req.body, { upsert:true }, function(err, company){
        if (err) return res.status(500).send({ error: err });
        return res.status(200).send({ company });
    });
}

exports.delete = async (req, res, next) => {
    let _id = req.params.id;

    Companies.remove({ _id }, function(err) {
        if (err) return res.status(500).send({ error: err });
        return res.status(200).send('Deleted!');
    });
}