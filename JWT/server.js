require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.use(express.json());

const users = [
  {
    username: "Abdullah",
    password: "$2b$10$IFmawNbmXDActxmgSyrM6uNAv8rJ08XPPy6X9umpoulWhDoqMVGOq",
  },
  {
    username: "john",
    password: "$2b$10$Tp3cCY3d.5dgIrvXdoUpX.HoOq5vQgMc.2wP22oJMHHuTYrdRNnjG",
  },
  {
    username: "Doom",
    password: "$2b$10$i7u2VfTwOpCJ.25DdPDbve5GsEeDuzkrSUB.N01wPyburLm1FM3LK",
  },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username: username,
    password: hashedPassword,
  });
  res.json(users);
});

app.get("/posts", authenticateToken, (req, res) => {
  res.json(users.filter((el) => el.username === req.user.name));
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
