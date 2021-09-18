import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import rolesRouter from "./routes/roles.js";
import ordersRouter from "./routes/orders.js";
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./public/uploads'))

//ROUTES

app.get("/", (req, res) => {
  try {
    res.json("iWriterPro API homepage");
  } catch (error) {
    console.error(error.message);
  }
});

app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
