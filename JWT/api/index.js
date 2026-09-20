const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    username: "Abdullah",
    password: "4256ab4256",
    isAdmin: true,
  },
  { id: 2, username: "John Doe", password: "12345", isAdmin: false },
];

app.post("/api/user", (req, res) => {
  const { username, password } = req.body;
  let user = users.find(
    (el) => el.username === username && el.password === password,
  );
  if (user) {
    res.json(user);
  } else {
    res.status(400).json("username or password is wrong");
  }
});

app.listen(8080, () => {
  console.log("backend is working!!!");
});
