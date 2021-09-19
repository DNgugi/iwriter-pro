import express from "express";
import { pool } from "../iwriterprodb.js";

const router = express.Router();

//ROLES TABLE ROUTES
//Create
router.post("/", async (req, res) => {
  try {
    const { role_id, role_name, assigned_to } = req.body;

    await pool.query(
      "INSERT INTO roles (role_id,role_name,assigned_to) VALUES ($1, $2, $3) RETURNING *",
      [role_id, role_name, assigned_to]
    );

    res.json("New role added successfully!");
  } catch (error) {
    console.error(error.message);
  }
});

//READ ALL USERS
router.get("/", async (req, res) => {
  try {
    const allRoles = await pool.query("SELECT * FROM roles");
    res.json(allRoles.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//READ ROLE BY ROLENAME
router.get("/:role_name", async (req, res) => {
  const { name } = req.params;
  try {
    const selectRole = await pool.query(
      "SELECT * FROM roles WHERE role_name = role_name"
    );
    res.json(selectRole.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//UPDATE
router.put("/:role_id", async (req, res) => {
  try {
    const { roleid } = req.params;
    const { role_name, assigned_to } = req.body;

    await pool.query(
      "UPDATE roles SET role_name=$1, assigned_to=$2 WHERE role_id = role_id",
      [first_name, last_name, email, phone]
    );
    res.json("Role updated successfully");
  } catch (error) {
    console.error(error.message);
  }
});

//DELETE
// router.delete("/:role_id", async (req, res) => {
//   try {
//     const { username } = req.params;
//     await pool.query("DELETE FROM users WHERE username = $1", [username]);
//     res.json("User deleted successfully");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

export default router;
