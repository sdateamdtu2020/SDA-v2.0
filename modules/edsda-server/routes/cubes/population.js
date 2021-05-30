const express = require('express');
const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//getpopulationbyCityId
router.get('/population/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?population
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:population ?population.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"population":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getpopulationByYear
router.get('/population/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?population 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:population ?population.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"population":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getIndustryyCityYear
router.get('/population/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?population where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:population ?population.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"population":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getpopulationByCityPeriod
router.get('/population/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?population 
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:population ?population.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"population":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})


module.exports = router;