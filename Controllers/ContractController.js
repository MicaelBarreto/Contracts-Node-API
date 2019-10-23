const Contracts = require('../Model/contract');

exports.index = async (req, res, next) => {
    try {
        const contracts = await Contracts.find({});
        return res.send(contracts);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { price, payment_times, start_date, expected_date, company_id } = req.body;
    if(!price || !payment_times || !start_date || !expected_date || !company_id) return res.status(400).send({ error: 'Insulficient Data' });

    try {
        if(await Contracts.findOne({ cpf })) return res.status(400).send({ error: 'User already exists!' });

        const contract = await Contracts.create(req.body);

        return res.status(200).send({ contract });
    } catch (error) {
        return res.status(500).send({ error: 'Error to find compan!' });
    }
}

exports.update = async (req, res, next) => {
    let id = req.params.id;

    Contracts.findOneAndUpdate({ id }, req.body, { upsert:true }, function(err, contract){
        if (err) return res.send(500, { error: err });
        return res.send({ contract });
    });
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    Contracts.remove({ id }, function(err) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('Deleted!');
    });
}