const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { verifyAccessToken } = require("./middleware/verifyJWT");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(verifyAccessToken);

const indexRouter = require("./routes/index.routes");
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => console.log(`Bibaboba started on port ${PORT}`));
