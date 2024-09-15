// app.js
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
require("./config/passport")(passport); // Pass passport configuration
const connectDB = require("./service/DBConnection");

// Connect to MongoDB
// mongoose.connect("mongodb://localhost/botdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
let connection = connectDB();
console.log({ connection });
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
