import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//* Routes import
import userRouter from "./routes/user.route.js";

//? routes declaration
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/v1/users", userRouter);

export { app };
