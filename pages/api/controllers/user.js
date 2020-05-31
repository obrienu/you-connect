const bcrypt = require('bcryptjs');
const pool = require('../db/index');
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const ADMIN_CODE = process.env.ADMIN_CODE;



const signToken = async (id) => {
  const token = await jwt.sign({ id }, secretKey, { expiresIn: 3600 });
  return token;
};


exports.registerUser = async (req, res) => {
  try {
    const {
      username, password, email, isAdmin, cpassword, adminCode
    } = JSON.parse(req.body);

    if (!email || !username || !password || !cpassword || !adminCode) {
      throw new Error('Please Enter All Fields');
    }

    if (adminCode !== ADMIN_CODE) throw new Error('Unauthorised Access');

    if (password !== cpassword) throw new Error('Password and Cpassword must be the same');

    const q = `SELECT email FROM authors WHERE ?? = ?`;
    const values = ["email", email];
    pool.query(q, values, (err, response) => {

      if (err) {
        return res.status(401).json({ Error: err.sqlMessage });
      }

      if (response.length) {
        return res.status(201).json({ Error: "User Already Exists" })
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const values = ["username", "isAdmin", "email", "authors_password", username, isAdmin, email, hash]
      const q = `INSERT INTO authors(??, ??, ??, ??) VALUES(?, ?, ?, ?)`;
      pool.query(q, values, async (err, response) => {

        if (err) {
          return res.status(401).json({ Error: err.sqlMessage });
        }

        const token = await signToken(response.insertId);

        return res.json({
          token,
          user: {
            username,
            id: response.insertId,
            email,
          },
        });
      });
    });
  } catch (err) {
    console.error('user', err);
    res.status(400).json({ Error: err.message });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = JSON.parse(req.body);
    if (!email || !password) throw new Error('Please Enter All Fields');
    const q = `SELECT  ??,
               ??,
               ?? AS password, 
               ??, 
               IF(??,  true, false) ?? 
               FROM authors WHERE ?? = ?`;
    const values = ["id", "email", "authors_password", "username", "isAdmin", "isAdmin", "email", email];

    pool.query(q, values, async (err, response) => {

      if (err) {
        return res.status(401).json({ Error: err.sqlMessage });
      }

      if (!response.length) {
        return res.status(201).json({ Error: "User does not exist" })
      }
      let user = response[0];
      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        return res.status(201).json({ Error: 'Invalid Password' })
      }
      const token = await signToken(user.id);
      res.json({
        token,
        user: {
          username: user.username,
          id: user.id,
          email: user.email,
          isAdmin: (user.isAdmin) ? true : false,
        }
      });
    })
  } catch (err) {
    console.error('user', err);
    res.status(400).json({ Error: err.message });
  }
};


exports.getUser = async (req, res) => {
  try {

    const token = req.cookies.token;
    if (token === 'null') {
      return res.status(401).json({ Error: "No token, authorisation denied" });
    }
    const decoded = await jwt.verify(token, secretKey);
    const q = `SELECT id, username, isAdmin, email  FROM authors WHERE id = ?`;
    const values = [decoded.id];
    pool.query(q, values, (err, response) => {
      if (err) {
        return res.status(401).json({ Error: err.sqlMessage });
      }
      let user = response[0]
      return res.json({
        token,
        user: {
          username: user.username,
          id: user.id,
          email: user.email,
          isAdmin: (user.isAdmin) ? true : false,
        }
      });
    });
  } catch (error) {
    res.status(400).json({ Error: 'Cannot get user' })
  }
};