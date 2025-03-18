"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
const mongoose_1 = require("mongoose");
const user = new mongoose_1.Schema({
    gender: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        street: {
            number: {
                type: Number
            },
            name: {
                type: String
            }
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        postcode: {
            type: String || Number
        }
    },
    email: {
        type: String
    },
    nat: {
        type: String
    }
});
exports.usuario = (0, mongoose_1.model)('usuario', user);
