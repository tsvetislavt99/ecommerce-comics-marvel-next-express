"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
var express_1 = require("express");
exports.authRoutes = (0, express_1.Router)();
exports.authRoutes.get('/', function (req, res) {
    res.send('hi');
});
