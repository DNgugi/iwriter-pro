import express from "express";
import multer from "multer";
import path from 'path';
// const upload = multer({ dest: 'uploads/' });
import { pool } from "../iwriterprodb.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: './public/uploads/',
  
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
}
);
const upload = multer({ storage: storage });
//ROLES TABLE ROUTES
//Create
router.post("/", upload.single('attachment'), async (req, res) => {
  try {
    const { name, email, instructions } = req.body;

    await pool.query(
      "INSERT INTO orders (name, email, instructions, attachment) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, instructions, req.file.path]
    );
    res.json('Thank you for your request, we will be in touch shortly!');
    console.log(req.body, req.file);
  } catch (error) {
    console.error(error.message);
  }
});

//READ ALL USERS
// router.get("/", async (req, res) => {
//   try {
//     const allRoles = await pool.query("SELECT * FROM roles");
//     res.json(allRoles.rows);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// //READ ROLE BY ROLENAME
// router.get("/:role_name", async (req, res) => {
//   const { name } = req.params;
//   try {
//     const selectRole = await pool.query(
//       "SELECT * FROM roles WHERE role_name = role_name"
//     );
//     res.json(selectRole.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// //UPDATE
// router.put("/:role_id", async (req, res) => {
//   try {
//     const { roleid } = req.params;
//     const { role_name, assigned_to } = req.body;

//     await pool.query(
//       "UPDATE roles SET role_name=$1, assigned_to=$2 WHERE role_id = role_id",
//       [first_name, last_name, email, phone]
//     );
//     res.json("Role updated successfully");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

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
