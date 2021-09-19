import express from "express";
import { pool } from "../iwriterprodb.js";

const router = express.Router();

//USERS TABLE ROUTES
//Create
router.post("/", async (req, res) => {
  try {
    const { id, username, first_name, last_name, email, phone } = req.body;

    await pool.query(
      "INSERT INTO users (id,username, first_name, last_name, email, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id, username, first_name, last_name, email, phone]
    );

    res.json("New user added successfully!");
  } catch (error) {
    console.error(error.message);
  }
});

//READ ALL USERS
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//READ USER BY USERNAME
router.get("/:username", async (req, res) => {
  const { name } = req.params;
  try {
    const selectUser = await pool.query(
      "SELECT * FROM users WHERE username = username"
    );
    res.json(selectUser.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//UPDATE
router.put("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const { first_name, last_name, email, phone } = req.body;

    await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2, email=$3, phone=$4 WHERE username = username",
      [first_name, last_name, email, phone]
    );
    res.json("User updated successfully");
  } catch (error) {
    console.error(error.message);
  }
});

//DELETE
router.delete("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    await pool.query("DELETE FROM users WHERE username = $1", [username]);
    res.json("User deleted successfully");
  } catch (error) {
    console.error(error.message);
  }
});

export default router;
