//connect avec mongodb
const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
      "mongodb+srv://RESTO:ali123!@cluster0.yn0do.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error data base");
    });
};
module.exports = db_connection;
