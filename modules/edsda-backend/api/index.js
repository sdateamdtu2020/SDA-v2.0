const { EnapsoGraphDBClient } = require("@innotrade/enapso-graphdb-client");
const { EnapsoGraphDBAdmin } = require("@innotrade/enapso-graphdb-admin");
const GRAPHDB_BASE_URL = "http://localhost:7200",
  GRAPHDB_REPOSITORY = "EDSDA",
  GRAPHDB_USERNAME = "test",
  GRAPHDB_PASSWORD = "test";
  // GRAPHDB_CONTEXT_TEST = "http://ont.enapso.com/repo",
  // GRAPHDB_CONTEXT_SHACL = "http://rdf4j.org/schema/rdf4j#SHACLShapeGraph";

const GRAPHDB_DEFAULT_PREFIXES = [
  EnapsoGraphDBClient.PREFIX_OWL,
  EnapsoGraphDBClient.PREFIX_RDF,
  EnapsoGraphDBClient.PREFIX_RDFS,
];

let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
  baseURL: GRAPHDB_BASE_URL,
  repository: GRAPHDB_REPOSITORY,
  prefixes: GRAPHDB_DEFAULT_PREFIXES,
});

graphDBEndpoint
  .login(GRAPHDB_USERNAME, GRAPHDB_PASSWORD)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err, "process error here...");
  });

  graphDBEndpoint
  .uploadFromFile({
    filename: "../ontologies/EnapsoTest.owl",
    format: "application/rdf+xml",
    baseIRI: "http://ont.enapso.com/test#",
    context: "http://ont.enapso.com/test",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err, "process error here...");
  });