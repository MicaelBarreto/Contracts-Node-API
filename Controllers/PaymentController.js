const Payments = require('../Model/payment');

exports.index = async (req, res, next) => {
    try {
        const payments = await Payments.find({});
        return res.send(payments);
    } catch (error) {
        return res.status(500).send({ error: 'There was an error'});
    }
}

exports.create = async (req, res, next) => {
    const { value, date, contract_id, company_id } = req.body;
    if(!value || !date || !contract_id || !company_id) return res.status(400).send({ error: 'Insulficient Data' });

    try {
        if(await Payments.findOne({ date, contract_id, company_id, value })) return res.status(400).send({ error: 'User already exists!' });

        const payment = await Payments.create(req.body);

        return res.status(200).send({ payment });
    } catch (error) {
        return res.status(500).send({ error: 'Error to find compan!' });
    }
}

exports.update = async (req, res, next) => {
    let id = req.params.id;

    Payments.findOneAndUpdate({ id }, req.body, { upsert:true }, function(err, payment){
        if (err) return res.send(500, { error: err });
        return res.send({ payment });
    });
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    Payments.remove({ id }, function(err) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('Deleted!');
    });
}