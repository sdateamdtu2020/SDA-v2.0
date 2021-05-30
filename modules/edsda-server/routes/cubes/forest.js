const express = require('express');
const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//getafforestationbyCityId
router.get('/afforestation/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?afforestation
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:afforestation ?afforestation.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"afforestation":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getafforestationByYear
router.get('/afforestation/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?afforestation 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:afforestation ?afforestation.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"afforestation":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getAfforestationByCityYear
router.get('/afforestation/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?afforestation where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:humidity ?afforestation.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"afforestation":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getAfforestationByCityPeriod
router.get('/afforestation/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?afforestation where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:afforestation ?afforestation.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"afforestation":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getaforestcoverbyCityId
router.get('/forestcover/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?forestcover
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:forestcover ?forestcover.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"forestcover":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getforestcoverByYear
router.get('/forestcover/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?forestcover 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:forestcover ?forestcover.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"forestcover":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getForestcoverByCityYear
router.get('/forestcover/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?forestcover where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:forestcover ?forestcover.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"forestcover":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getForestcoverByCityPeriod
router.get('/forestcover/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?forestcover
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:forestcover ?forestcover.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"forestcover":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

module.exports = router;