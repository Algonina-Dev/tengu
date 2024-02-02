"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modul = void 0;
const config_json_1 = __importDefault(require("../../../../config.json"));
const string_1 = require("../../../helper/string");
const Files_1 = require("../../../core/Files");
const Reducer_1 = require("./Reducer");
const Action_1 = require("./Action");
class Modul {
    constructor(parameters) {
        this._run = () => {
            let moduls = [
                {
                    root: config_json_1.default.dirRedux,
                    dir: config_json_1.default.dirRedux + '/' + (0, string_1.ucwords)(this.modul),
                    file: (0, string_1.ucwords)(this.submodul + config_json_1.default.actionPrefix),
                    write: (0, Action_1.WriteAction)({ modul: this.modul, filename: this.submodul }),
                },
                {
                    root: config_json_1.default.dirRedux,
                    dir: config_json_1.default.dirRedux + '/' + (0, string_1.ucwords)(this.modul),
                    file: (0, string_1.ucwords)(this.submodul + config_json_1.default.reduxPrefix),
                    write: (0, Reducer_1.WriteReducer)({ modul: this.modul, fileName: this.submodul }),
                },
            ];
            let r = { message: 'Nothing to do', result: false };
            for (let i = 0; i < moduls.length; i++) {
                const element = moduls[i];
                let fscheck = new Files_1.Files({
                    dir: element.root,
                    file: element.file,
                    write: element.write,
                });
                r = fscheck.checking();
                if (r.result) {
                    let fs = new Files_1.Files({
                        dir: element.dir,
                        file: element.file,
                        write: element.write,
                    });
                    let prepareFolder = fs.checking();
                    if (prepareFolder.result) {
                        r = fs.createFile();
                    }
                    console.log(r.message);
                }
            }
            return r;
        };
        this.submodul = parameters.submodul;
        this.modul = parameters.modul;
    }
}
exports.Modul = Modul;
