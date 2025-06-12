import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("DB ERROR: ", (error) => {
      console.log("Error: ", error);
    });
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection Failed: !!! ", err);
  });
