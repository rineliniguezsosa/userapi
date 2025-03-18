"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const config_1 = require("./config");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/user', routes_1.usuarioRouter);
(0, config_1.mongoconnection)();
app.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`);
});
