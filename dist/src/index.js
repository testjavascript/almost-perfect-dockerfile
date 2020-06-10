"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
process.on("SIGTERM", () => {
    console.info("SIGTERM signal received.");
});
let app = express_1.default();
app.listen(3000);
const router = express_2.Router();
router.get("/demo", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Demo was called`);
        res
            .status(200)
            .json({ demo: true })
            .end();
    }
    catch (error) {
        next(error);
    }
}));
app.use(router);
//# sourceMappingURL=index.js.map