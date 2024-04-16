import winston from 'winston'

const logger = winston.createLogger({
  level:'debug',
  transports: [
    new winston.transports.File({filename: 'src/log/info.log', level: 'info'}),
    new winston.transports.File({filename: 'src/log/warn.log', level: 'warn'}),
    new winston.transports.File({filename: 'src/log/error.log', level: 'error'})
  ]
})

export default logger