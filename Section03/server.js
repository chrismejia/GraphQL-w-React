const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

const port = 1337;

/**
 * If the server sees a call for a route to graphql,
 * tell it to use the express-graphql lib
 */
app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});
