import { Router } from "express";
import { Helper } from "../helper";

const router = Router();

router.post("/pc-avail", async (req, res) => {
  try {
    res.json({ success: true, message: `pieces availability endpoint hit. \n${JSON.stringify(req.body, null, 2)}` });
    Helper.customConsoleLog({ funcName: "pc-avail", message: "PC availability endpoint hit", obj: req.body });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ success: false, error: "Database query failed" });
  }
});

export default router;
