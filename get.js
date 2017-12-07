"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function get(req, res, next) {
    res.send(data_1.customers);
    next();
}
exports.get = get;
