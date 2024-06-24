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

module.exports = {
  logger,
};
