import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
import bcrypt from "bcrypt";

/*
  -- packages for future use 

import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";

*/

const app = express();
const port = 8080;
const saltRounds = 10;

env.config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query("SELECT email FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      res.send(`Email already exists.`);
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          );
          console.log(result);
          res.render("homePage.ejs");
        }
      });
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});
app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query(
      "SELECT email, password FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length > 0) {
      const realPassword = result.rows[0].password;
      if (realPassword == password) {
        res.render("homePage.ejs");
      } else {
        res.send(`Incorrect password.`);
      }
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.send(`There is no that email address. Register first.`);
  }
});

app.listen(port, (req, res) => {
  console.log(`Server running on port : ${port}`);
});
