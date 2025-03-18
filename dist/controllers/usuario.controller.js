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
exports.updateUserById = exports.getUserById = exports.saveUser = exports.deleteUser = exports.getUsers = exports.getListUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const models_1 = require("../models");
const getListUsers = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const req = yield axios_1.default.get(`${process.env.RANDOMUSER}`);
        const res = yield req.data;
        const data = res.results.map((user) => ({
            gender: user.gender,
            name: user.name.first,
            location: {
                street: {
                    number: user.location.street.number,
                    name: user.location.street.name
                },
                city: user.location.city,
                state: user.location.state,
                country: user.location.country,
                postcode: user.location.postcode
            },
            email: user.email,
            nat: user.nat
        }));
        const user = yield models_1.usuario.insertMany(data, { ordered: false });
        resp.json({
            message: 'Datos insertados',
            status: true,
            data: user
        });
    }
    catch (error) {
        console.log('error al insertar: ', error);
        resp.json({
            message: 'Datos no ingresados',
            status: false
        });
    }
});
exports.getListUsers = getListUsers;
const getUsers = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listusers = yield models_1.usuario.find();
        resp.json({
            status: true,
            data: listusers
        });
    }
    catch (error) {
        console.log('error al obtener: ', error);
        resp.json({
            status: false,
            message: 'Algo sucedio intenta de nuevo'
        });
    }
});
exports.getUsers = getUsers;
const deleteUser = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = requ.params;
        const deleteuser = yield models_1.usuario.deleteOne({ _id: _id });
        resp.json({
            status: true,
            message: 'registro eliminado',
            data: deleteuser
        });
    }
    catch (error) {
        console.log('error al obtener: ', error);
        resp.json({
            status: false,
            message: 'Algo salio mal en la eliminación',
        });
    }
});
exports.deleteUser = deleteUser;
const saveUser = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const newuser = new models_1.usuario(Object.assign({}, requ.body));
    console.log("save user:", requ.body);
    try {
        const user = yield newuser.save(requ.body);
        resp.json({
            status: true,
            message: 'Registro insertado correctamente :)',
            data: user
        });
    }
    catch (error) {
        console.log(error);
        resp.json({
            status: false,
            message: 'Algo salio mal en la inserción',
        });
    }
});
exports.saveUser = saveUser;
const getUserById = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = requ.params;
    try {
        const req = yield models_1.usuario.find({ _id: _id });
        resp.json({
            status: true,
            data: req
        });
    }
    catch (error) {
        console.log(error);
        resp.json({
            status: false,
            message: 'Algo salio mal en la obtención del usuario',
        });
    }
});
exports.getUserById = getUserById;
const updateUserById = (requ, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = requ.params;
    const { data } = requ.body;
    try {
        const req = yield models_1.usuario.updateOne({ _id }, { $set: data });
        resp.json({
            status: true,
            data: req
        });
    }
    catch (error) {
        console.log(error);
        resp.json({
            status: false,
            message: 'Algo salio mal en la actualización del usuario',
        });
    }
});
exports.updateUserById = updateUserById;
