import countries from '../data/countries.js';
import { validationResult } from 'express-validator';


const checkIfCountryInArray = code => {
    if (!code) return null;
    const sanitizedCode = code.toUpperCase();
    return countries.find(
        country => country.alpha2Code === sanitizedCode ||country.alpha3Code === sanitizedCode
        );
};

export const getAllCountries = (req, res) => res.json(countries);

export const getSingleCountry = (req, res) => {
    const {code} = req.params;
    const country = checkIfCountryInArray(code);
    if(!country) return res.status(404).json({error: 'Country does noct exist in your wishlist'});
    res.status(200).json(country);
};

export const createCountry = (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}
const { name, alpha2Code, alpha3Code } = req.body;
const alreadyExists = [checkIfCountryInArray(alpha2Code), checkIfCountryInArray(alpha3Code)];
if(alreadyExists.some(element => element))
 return res.status(403).json({ error: 'Country already exists'});
    const newCountry = {
        id: countries.length + 1,
        name, 
        alpha2Code,
        alpha3Code,
        visited: false
    };
    countries.push(newCountry);
    res.json(newCountry);
};

export const updateCountry = (req, res) => {
    const {code} = req.params;
    const {name, alpha2Code, alpha3Code, visited, notes } = req.body;
    const country = checkIfCountryInArray(code);
    if(!country) return res.status(404).json({error: 'Country does noct exist in your wishlist'});
    country.name = name;
    country.alpha2Code = alpha2Code;
    country.alpha3Code = alpha3Code;
    country.visited = visited;
    country.notes = notes;
    res.status(200).json(country);
};

export const deleteCountry = (req, res) => {
    const {code} = req.params;
    const country = checkIfCountryInArray(code);
    if(!country) return res.status(404).json({error: 'Country does noct exist in your wishlist'});
    const index = countries.indexOf(country);
    countries.splice(index, 1);
    res.status(200).json({ success: 'Country removed'})
};
