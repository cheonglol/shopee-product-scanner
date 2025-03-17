// import { Request, Response } from "express";
// import { ResponseModel } from "../interface/responses/transmitModels";

// export const getIsAlive = async (_req: Request, res: Response) => {
//   try {
//     const responseBody: ResponseModel<{ isAlive: true }> = {
//       success: true,
//       payload: { isAlive: true },
//     };
//     res.json(responseBody);
//   } catch (err) {
//     console.error("Error checking server health:", err);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// };
