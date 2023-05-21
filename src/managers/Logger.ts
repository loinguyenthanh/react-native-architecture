/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */
enum LogLevel {
  Error = 1,
  Warn,
  Info,
  Debug,
}

class Logger {
  private readonly name: string

  private readonly level: LogLevel

  constructor(name: string, level: LogLevel = LogLevel.Info) {
    this.name = name
    this.level = level
  }

  error(message: string, ...args: any[]) {
    this.log(LogLevel.Error, message, ...args)
  }

  warn(message: string, ...args: any[]) {
    this.log(LogLevel.Warn, message, ...args)
  }

  info(message: string, ...args: any[]) {
    this.log(LogLevel.Info, message, ...args)
  }

  debug(message: string, ...args: any[]) {
    this.log(LogLevel.Debug, message, ...args)
  }

  private log(level: LogLevel, message: string, ...args: any[]) {
    if (level <= this.level) {
      const timestamp = new Date().toISOString()
      const logMessage = `[${timestamp}] [${LogLevel[level].toUpperCase()}] [${
        this.name
      }] ${message}`
      console.log(logMessage, ...args)
    }
  }
}

export default new Logger('APP')
