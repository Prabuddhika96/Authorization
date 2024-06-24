// const winston = require("winston");
// const { combine, timestamp, printf, json, prettyPrint, errors } =
//   winston.format;

// const logger = winston.createLogger({
//   level: "info",
//   format: combine(
//     errors({ stack: true }),
//     timestamp(),
//     // printf((info) => {
//     //   return `${info.timestamp} ${info.level}: ${info.message}`;
//     // })
//     json(),
//     prettyPrint()
//   ),
//   defaultMeta: { service: "user-service" },
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({
//       filename: "winston-log.log",
//       level: "error",
//     }),
//   ],
// });

// // this is how we pass data to the logger
// const requestLog = { method: "GET", isAuthenticated: false };

// // we can create a child logger for that
// const childLogger = logger.child(requestLog);

// childLogger.info("An info log from child logger");
// childLogger.error(
//   "An error log from child logger",
//   new Error("504 Gateway Error")
// );

// using loggers.js
require("./loggers");
const winston = require("winston");

const paymentLogger = winston.loggers.get("PaymentLogger");
const orderLogger = winston.loggers.get("OrderLogger");

// paymentLogger.info("Payment processed successfully");
// orderLogger.error("Order processed failed");

// HTTP request handling
const requestHandler = (path) => {
  const profiler = paymentLogger.startTimer();

  const ONE_BILLION = 1000000000;

  for (let i = 0; i < ONE_BILLION; i++) {
    j = i * 2;
  }

  profiler.done({ message: `Request for ${path} completed` });
};

requestHandler("/payment");
