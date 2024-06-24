const winston = require("winston");

const loggerJsonFormat = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
  ],
});

const loggerCliFormat = winston.createLogger({
  level: "info",
  format: winston.format.cli(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "error.log",
    //   level: "error",
    // }),
  ],
});

module.exports = {
  loggerJsonFormat,
  loggerCliFormat,
};
