const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(
      "mongodb+srv://jigarlodaya12:CWp5WfH0wtG56RIh@cluster0.j3raq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
