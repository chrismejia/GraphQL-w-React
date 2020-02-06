const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

const port = 1337;

/**
 * For the middleware we registered, "/graphql", we pass in the schema file and the graphiql object into the expressGraphQL function.
 */
app.use("/graphql", expressGraphQL({ schema, graphiql: true }));

app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});
