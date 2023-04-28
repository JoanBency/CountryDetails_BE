const express = require('express');
const router = express.Router();
const request = require('node-fetch');

const getCountry = async (req, res) => {
    const name = req.params.country;
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {
            res.status(200).json(data);
        });
};

module.exports = { getCountry };