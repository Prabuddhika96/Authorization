const winston = require("winston");
const { combine, timestamp, printf, json, prettyPrint, errors } =
  winston.format;

winston.loggers.add("OrderLogger", {
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
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "orders-log.log",
    }),
  ],
  defaultMeta: { service: "order-logger-service" },
});

winston.loggers.add("PaymentLogger", {
  format: json(),
  transports: [
    new winston.transports.File({
      filename: "payment-log.log",
    }),
  ],
  defaultMeta: { service: "payment-logger-service" },
});
