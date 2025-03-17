import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import testingRoutes from "./routes/testingRoutes";

import { Helper } from "./helper";
import { consoleLoggerMiddleware } from "./middleware/consoleLoggerMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.PATREON_CREATOR_ACCESS_TOKEN === undefined || process.env.PATREON_CREATOR_REFRESH_TOKEN === undefined) {
  Helper.customConsoleLog({ funcName: "authenticateCreator", message: "Creator access token or refresh token not found in .env file" });
  Helper.customConsoleLog({ funcName: "authenticateCreator", message: "Exiting process" });
  process.exit(1);
}

// _____       _         _      _           _ _   _
// |  __ \     | |       | |    (_)         (_) | (_)
// | |__) |__ _| |_ ___  | |     _ _ __ ___  _| |_ _ _ __   __ _
// |  _  // _` | __/ _ \ | |    | | '_ ` _ \| | __| | '_ \ / _` |
// | | \ \ (_| | ||  __/ | |____| | | | | | | | |_| | | | | (_| |
// |_|  \_\__,_|\__\___| |______|_|_| |_| |_|_|\__|_|_| |_|\__, |
//                                                          __/ |
//                                                         |___/
const MINUTES = 5;
const rateLimitConfig = rateLimit({
  windowMs: MINUTES * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// __  __ _     _     _ _
// |  \/  (_)   | |   | | |
// | \  / |_  __| | __| | | _____      ____ _ _ __ ___  ___
// | |\/| | |/ _` |/ _` | |/ _ \ \ /\ / / _` | '__/ _ \/ __|
// | |  | | | (_| | (_| | |  __/\ V  V / (_| | | |  __/\__ \
// |_|  |_|_|\__,_|\__,_|_|\___| \_/\_/ \__,_|_|  \___||___/
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimitConfig);
app.use(consoleLoggerMiddleware);

// |  __ \           | |
// | |__) |___  _   _| |_ ___  ___
// |  _  // _ \| | | | __/ _ \/ __|
// | | \ \ (_) | |_| | ||  __/\__ \
// |_|  \_\___/ \__,_|\__\___||___/
export enum APP_BASE_ROUTES {
  ROOT = "/",
  TEST = "/test", // FIXME: REMOVE IN PRODUCTION
}

app.use(APP_BASE_ROUTES.TEST, testingRoutes);

app.listen(PORT, () => {
  Helper.customConsoleLog({ funcName: `${[app.listen.name]}`, message: `Server is running on port ${PORT}` });
});
