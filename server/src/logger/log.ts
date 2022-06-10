import { join } from 'path';
import * as winston from 'winston';

const date = new Date(); 
const year = date.getFullYear();
const mth = date.getMonth() + 1;
const month = mth < 10 ? `0${mth}` : mth;
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.File({ 
        filename: join(__dirname, `../../tmp/error-${month}-${year}.log`), 
        level: 'error', 
    }),
    new winston.transports.File({ 
        filename: join(__dirname, `../../tmp/log-${month}-${year}.log`)
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;