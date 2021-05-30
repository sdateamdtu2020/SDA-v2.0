const bodyParser = require('body-parser');
const express = require('express');
const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//merge2datacubes
router.get('/dc1/:dc1/dc2/:dc2/s1/:s1/s2/:s2/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/> 
        select ?city ?year ?${req.params.s1} ?${req.params.s2}
        where{
            values ?cityid {'${req.params.cityid}'}
            graph ${dc[`${req.params.dc1}`]} {
                  ?obs1 a qb:Observation.
                  ?obs1 prop:city ?city.
                  ?obs1 prop:cityid ?cityid.
                  ?obs1 prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
                  ?obs1 prop:${req.params.s1} ?${req.params.s1}.
            }
            graph ${dc[`${req.params.dc2}`]}  {
                  ?obs2 a qb:Observation.
                  ?obs2 prop:cityid ?cityid.
                  ?obs2 prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
                  ?obs2 prop:${req.params.s2} ?${req.params.s2}.
             }
        } 
        `, { transform: "toJSON" })
    .then((result) => {
        return res.json(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

//merge3datacubes
router.get('/dc1/:dc1/dc2/:dc2/dc3/:dc3/s1/:s1/s2/:s2/s3/:s3/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    graphDBEndpoint
    .query(
        `PREFIX qb: <http://purl.org/linked-data/cube#>
        PREFIX prop: <http://www.sda-research.ml/dc/prop/> 
        select ?city ?year ?${req.params.s1} ?${req.params.s2} ?${req.params.s3}
        where{
            values ?cityid {'${req.params.cityid}'}
            graph ${dc[`${req.params.dc1}`]} {
                  ?obs1 a qb:Observation.
                  ?obs1 prop:city ?city.
                  ?obs1 prop:cityid ?cityid.
                  ?obs1 prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
                  ?obs1 prop:${req.params.s1} ?${req.params.s1}.
            }
            graph ${dc[`${req.params.dc2}`]}  {
                  ?obs2 a qb:Observation.
                  ?obs2 prop:cityid ?cityid.
                  ?obs2 prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
                  ?obs2 prop:${req.params.s2} ?${req.params.s2}.
             }
            graph ${dc[`${req.params.dc3}`]}  {
                  ?obs3 a qb:Observation.
                  ?obs3 prop:cityid ?cityid.
                  ?obs3 prop:year ?year filter(?year >= ${req.params.fyear} && ?year <= ${req.params.tyear}).
                  ?obs3 prop:${req.params.s3} ?${req.params.s3}.
            }
        }`, { transform: "toJSON" })
    .then((result) => {
        return res.json(result);
    })
    .catch((err) => {
        console.log(err);
    });
})


module.exports = router;