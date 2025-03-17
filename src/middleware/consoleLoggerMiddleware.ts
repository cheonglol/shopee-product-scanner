import { Request, Response, NextFunction } from "express";
import { timestamp } from "../constant";

// Custom logging middleware
export const consoleLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`\n\n\n[${timestamp}]\n[consoleLoggerMiddleware] ${req.method} ${req.url}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers, null, 2)}`);
  if (req.method === "post" || req.method === "POST") {
    console.log(`Request Body: ${JSON.stringify(req.body, null, 2)}`);
  }

  // Capture the original res.json method
  const originalJson = res.json;

  // Override res.json to capture the response payload
  res.json = (body: unknown) => {
    console.log(`Response: ${JSON.stringify(body, null, 2)}`);
    return originalJson.call(res, body);
  };

  next();
};
