const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./Schema/Schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://altar:test123@graphql-cluster.h6sqbty.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
