require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.use(express.json());

let refreshTokens = [];

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

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
};

app.post("/refreshToken", (req, res) => {
  const { token } = req.body;
  if (token === null) return res.sendStatus(401);
  if (!refreshTokens.includes(token)) return res.sendStatus(403);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    refreshTokens = refreshTokens.filter((el) => el !== token);
    res.json({ accessToken: accessToken });
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user1 = users.find((el) => el.username == username);
  if (!user1) {
    return res.send("User not found");
  }
  try {
    if (await bcrypt.compare(password, user1.password)) {
      console.log("success");
    } else {
      return res.send("Not Allowed");
    }
  } catch (e) {
    res.send(err);
  }
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
