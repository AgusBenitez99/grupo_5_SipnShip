const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/header", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "partials/header.html"))
);
app.get("/footer", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "partials/footer.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.get("/carrito", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "carrito.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

app.get("/product-detail", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "product-detail.html"))
);

app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);
