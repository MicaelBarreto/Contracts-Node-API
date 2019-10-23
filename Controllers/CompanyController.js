const jwt = require('jsonwebtoken');
const config = require('../Config/config');
const Companies = require('../Model/company');


class CompanyController{

    static async index(req, res, next) {
        try {
            const companies = await Companies.find({});
            return res.send(companies);
        } catch (error) {
            return res.status(500).send({ error: 'There was an error'});
        }
    }

    static async create(req, res, next) {
        const { name, cpf, phone, address } = req.body;
        if(!name || !cpf || !phone || !address) return res.status(400).send({ error: 'Insulficient Data' })
    
        try {
            if(await Companies.findOne({ cpf })) return res.status(400).send({ error: 'User already exists!' })
    
            const company = await Companies.create(req.body);
    
            return res.status(201).send({ company });
        } catch (error) {
            return res.status(500).send({ error: 'Error to find compan!' });
        }
    }

    static async auth(req, res, next) {
        const { email, password } = req.body;

        if(!email || !password) return res.status(400).send({ error: 'Insuficient Data!' })

        try {
            const company = await Companies.findOne({ email }).select('+password');
            if(!company) return res.statsu(400).send({ error: 'company not found!' });

            const pass_ok = await bcrypt.compare(password, company.password);

            if(!pass_ok) return res.status(401).send({ error: 'Authentication error' });

            company.password = undefined;
            return res.send({ company });
        } catch (error) {
            return res.status(500).send({ error: 'There was an error!' });
        }
    }

    static async update(req, res, next) {

    }

    static async delete(req, res, next) {
        
    }
}

module.exports = CompanyController;