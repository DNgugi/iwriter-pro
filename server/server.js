const express = require( "express");
const cors = require( "cors");
// import usersRouter from "./routes/users.js";
// import rolesRouter from "./routes/roles.js";
const ordersRouter = require("./routes/orders.js");
const app = express();

const PORT = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./public/uploads'))

//ROUTES

app.get("/", (req, res) => {
  try {
    res.json("Server is up, iWriter Pro API is ready");
  } catch (error) {
    console.error(error.message);
  }
});

// app.use("/users", usersRouter);
// app.use("/roles", rolesRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
