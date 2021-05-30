const { EnapsoGraphDBClient } = require("enapso-graphdb-client");

// Config
const GRAPHDB_BASE_URL = "http://localhost:7200/",
    GRAPHDB_REPOSITORY = "sda-research",
    GRAPHDB_USERNAME = "test",
    GRAPHDB_PASSWORD = "test",
    dc = {
    dcclimate : "<https://sda-research.ml/dc/climate>",
    dcindustry : "<https://sda-research.ml/dc/industry>",
    dcforest : "<https://sda-research.ml/dc/forest>",
    dcpopulation : "<https://sda-research.ml/dc/population>"
    }

//Create an Endpoint.
let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: GRAPHDB_BASE_URL,
    repository: GRAPHDB_REPOSITORY
});

//Authenticate (Optional)
graphDBEndpoint.login(GRAPHDB_USERNAME,GRAPHDB_PASSWORD)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

module.exports = { graphDBEndpoint : graphDBEndpoint,
    dc : dc
} 