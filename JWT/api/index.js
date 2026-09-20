const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    username: "Abdullah",
    password: "4256ab4256",
    isAdmin: true,
  },
  { id: 1, username: "Abdullah", password: "4256ab4256", isAdmin: true },
];

app.listen(8080, () => {
  console.log("backend is working!!!");
});
