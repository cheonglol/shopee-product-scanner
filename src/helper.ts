import { timestamp } from "./constant";

/**
 * Construct a console log message template, it got a timestamp yo
 */

const formatLogMessage = ({ tag = "LOG", funcName, message }: { tag?: string; funcName: string; message: unknown }): string => {
  return `[${timestamp}] [${tag}] [${funcName}] ${typeof message === "object" && message !== null ? "\n" + JSON.stringify(message, null, 2) : message}`;
};

const customConsoleLog = ({ tag = "LOG", funcName, message, obj = undefined }: { tag?: string; funcName: string; message: unknown; obj?: unknown }): void => {
  console.log(formatLogMessage({ tag, funcName, message }));
  if (obj) {
    console.log(obj);
  }
};

export const Helper = {
  customConsoleLog,
};
