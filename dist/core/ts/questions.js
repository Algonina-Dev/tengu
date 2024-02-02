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
exports.formQuestion = exports.pageQuestion = exports.langQuestion = exports.modulQuestion = void 0;
const cp = __importStar(require("@clack/prompts"));
const page = /^[a-zA-Z,]+$/;
exports.modulQuestion = {
    submodul: () => cp.text({
        message: 'What is your sub modul name?',
        validate: (value) => {
            if (value === '' || value === undefined) {
                return 'Modul name is required';
            }
        },
    }),
    // On Cancel callback that wraps the group
    // So if the user cancels one of the prompts in the group this function will be called
};
exports.langQuestion = {
    lang: ({ results }) => cp.select({
        message: `Select the base language to generate?`,
        options: [
            { value: 'ts', label: 'Typescript - Base Project' },
            { value: 'js', label: 'Javascript - Base Project' },
            { value: 'php', label: 'PHP - Base Project' },
        ],
    }),
};
exports.pageQuestion = {
    filename: () => cp.text({
        message: 'What is your file name?',
        validate: (value) => { },
    }),
};
exports.formQuestion = {
    submodul: () => cp.text({ message: 'What is your form name?' }),
    parameters: () => cp.text({
        message: 'What is your fields name?',
        placeholder: 'separate with commas',
        validate: (value) => {
            if (!page.test(value)) {
                return 'must be only letters, spaces, or dashes';
            }
        },
    }),
};
