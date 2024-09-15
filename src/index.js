import dotenv from "dotenv";
import { connectDB } from "./db/DBConnection.js";
import { app } from "./app.js";

// dotenv config
dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`⚙️ Server running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO db connection failed !!! ${err}`);
  });
