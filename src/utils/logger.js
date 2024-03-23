import winston from "winston";

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(({ message, timestamp, level }) => {
  return `${timestamp} ${level} ${message}`;
});

const logger = winston.createLogger({
  level: process.env.NODE_EVN === "development" ? "debug" : "info",
  format: combine(timestamp(), customFormat),
  transports: [
    // save all the error logs into error.log
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // any other case combine.log
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

if (process.env.NODE_EVN !== "production") {
  logger.add(
    new winston.transports.Console({
      format: customFormat,
    })
  );
}

export default logger;
