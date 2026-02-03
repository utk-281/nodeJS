import app from "./app.js";
import { connectDB } from "./src/config/db.config.js";
import { PORT } from "./src/config/index.js";

connectDB()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log("Server Started on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to database: ", err);
    console.log("Exiting.....");
    process.exit(1); // will not retry to connect
  });
