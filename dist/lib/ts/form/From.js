"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const Files_1 = require("../../../core/Files");
const config_json_1 = __importDefault(require("../../../../config.json"));
const string_1 = require("../../../helper/string");
const Write_1 = require("./Write");
class Form {
    constructor(parameters) {
        this.fileds = parameters.fields;
        this.modul = parameters.modul;
        this.submodul = parameters.submodul;
    }
    _run() {
        const content = (0, Write_1.Write)({
            filename: 'Form' +
                (this.modul === this.submodul
                    ? (0, string_1.ucwords)(this.modul)
                    : (0, string_1.ucwords)(this.modul) + (0, string_1.ucwords)(this.submodul)),
            fields: this.fileds,
        });
        const fs = new Files_1.Files({
            dir: config_json_1.default.pageRoot + this.modul,
            file: 'Form' +
                (this.modul === this.submodul
                    ? (0, string_1.ucwords)(this.modul)
                    : (0, string_1.ucwords)(this.modul) + (0, string_1.ucwords)(this.submodul)) +
                config_json_1.default.secondPrefix,
            write: content,
        });
        const r = fs.checking();
        if (r.result) {
            const createFile = fs.createFile();
            return createFile;
        }
        return r;
    }
}
exports.Form = Form;
