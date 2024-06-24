require("dotenv").config();
// const express = require("express");
const { logger } = require("./middleware/winstonLogger");

// const app = express();

// loggerJsonFormat.info("An info log");
// loggerJsonFormat.error("An error log");

// this is how we pass data to the logger
const requestLog = { method: "GET", isAuthenticated: false };

logger.info("An info log", requestLog);
logger.error("An error log", requestLog);

// we can create a child logger for that
const childLogger = logger.child(requestLog);
childLogger.info("An info log from child logger");
childLogger.error("An error log from child logger");

// const PORT = process.env.BACKEND_PORT || 3500;
// app.listen(PORT, () => {
//   try {
//     console.log(`Server running on port ${PORT}`);
//   } catch (err) {
//     console.log("EROOR : ", err.message);
//   }
// });
