const express = require('express');
const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//getHumidityByCityId
router.get('/humidity/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?humidity
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:humidity ?humidity.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"humidity":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getHumidityByYear
router.get('/humidity/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?humidity 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:humidity ?humidity.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"humidity":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getHumidityByCityYear
router.get('/humidity/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?humidity where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:humidity ?humidity.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"humidity":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})


//getHumidityByCityPeriod
router.get('/humidity/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?humidity where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:humidity ?humidity.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"humidity":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getRainfallByCityId
router.get('/rainfall/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?rainfall
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:rainfall ?rainfall.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"rainfall":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getRainfallByYear
router.get('/rainfall/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?rainfall 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:rainfall ?rainfall.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"rainfall":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getRainfallByCityYear
router.get('/rainfall/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?rainfall where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:rainfall ?rainfall.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"rainfall":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getRainfaillByCityPeriod
router.get('/rainfall/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?rainfall where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:rainfall ?rainfall.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"rainfall":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getTemperatureByCityId
router.get('/temperature/city/:cityid', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?temperature
        where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. 
            ?obs prop:cityid ?cityid.
            ?obs prop:city ?city. 
            ?obs prop:year ?year.
            ?obs prop:temperature ?temperature.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"temperature":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getTemperatureByYear
router.get('/temperature/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?temperature 
        where {
            ?obs a qb:Observation.
            ?obs prop:city ?city.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:temperature ?temperature.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"temperature":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getTemperatureByCityYear
router.get('/temperature/city/:cityid/year/:year', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?temperature where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year = ${req.params.year}).
            ?obs prop:temperature ?temperature.
        }`, { transform: "toJSON" })
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"temperature":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

//getTemperatureByCityPeriod
router.get('/temperature/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/>
        select ?city ?year ?temperature where {
            values ?cityid {'${req.params.cityid}'}
            ?obs a qb:Observation. ?obs prop:city ?city. ?obs prop:cityid ?cityid.
            ?obs prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
            ?obs prop:temperature ?temperature.
        }`, { transform: "toJSON" })    
    .then((result) => {
        finalResult = JSON.parse(JSON.stringify(result).split('"temperature":').join('"value":'));
        return res.json(finalResult);
    })
    .catch((err) => {
        console.log(err);
    });
})

module.exports = router;