require("dotenv").config();
const express = require("express");
const {
  loggerJsonFormat,
  loggerCliFormat,
} = require("./middleware/winstonLogger");

const app = express();

// loggerJsonFormat.info("An info log");
// loggerJsonFormat.error("An error log");

loggerCliFormat.info("An info log");
loggerCliFormat.error("An error log");

const PORT = process.env.BACKEND_PORT || 3500;
app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("EROOR : ", err.message);
  }
});
