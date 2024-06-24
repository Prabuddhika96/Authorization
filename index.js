const winston = require("winston");
const { combine, timestamp, printf, json, prettyPrint, errors } =
  winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    errors({ stack: true }),
    timestamp(),
    // printf((info) => {
    //   return `${info.timestamp} ${info.level}: ${info.message}`;
    // })
    json(),
    prettyPrint()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "winston-log.log",
      level: "error",
    }),
  ],
});

// this is how we pass data to the logger
const requestLog = { method: "GET", isAuthenticated: false };

logger.info("An info log", requestLog);
logger.error("An error log", requestLog);

// we can create a child logger for that
const childLogger = logger.child(requestLog);
childLogger.info("An info log from child logger");
childLogger.error("An error log from child logger");
