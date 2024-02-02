"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const fs = __importStar(require("fs"));
class Files {
    constructor({ dir, file, write }) {
        this.checking = () => {
            try {
                if (!fs.existsSync(this.dir)) {
                    console.log(this.dir);
                    fs.mkdirSync(this.dir);
                    return this.checking();
                }
                return { result: true, message: 'Directory Founded' };
            }
            catch (error) {
                return { result: false, message: 'Directory not be found' };
            }
        };
        this.createFile = () => {
            try {
                fs.createWriteStream(this.dir + this.file).write(this.write);
                return { message: `File ${this.file} has been created`, result: false };
            }
            catch (error) {
                return { message: '', result: false };
            }
        };
        this.dir = dir;
        this.file = '/' + file;
        this.write = write;
    }
}
exports.Files = Files;
