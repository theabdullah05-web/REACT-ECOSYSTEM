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

app.listen(8080, () => {
  console.log("backend is working!!!");
});
