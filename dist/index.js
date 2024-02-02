#! /usr/bin/env node
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const cp = __importStar(require("@clack/prompts"));
const p = new commander_1.Command();
const promises_1 = require("node:timers/promises");
const questions_1 = require("./core/ts/questions");
const Page_1 = require("./lib/ts/page/Page");
const Modul_1 = require("./lib/ts/modul/Modul");
const Table_1 = require("./lib/ts/table/Table");
const From_1 = require("./lib/ts/form/From");
p.name('Tengu').description('GENERATOR BASE PROJECT').version('1.0.0');
p.command('modul <modul>')
    .description('Generate Modul')
    .action((modul) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (modul) {
            const input = yield cp.group(questions_1.modulQuestion, {
                onCancel: ({ results }) => {
                    cp.cancel('Operation cancelled.');
                    process.exit(0);
                },
            });
            if (input.submodul) {
                const response = new Modul_1.Modul({
                    modul: modul,
                    submodul: input.submodul,
                });
                const s = cp.spinner();
                s.start('Waiting process...');
                yield (0, promises_1.setTimeout)(300);
                return s.stop(response._run().message);
            }
        }
    }))();
});
p.command('form <modul>')
    .description('Generate Modul')
    .action((modul) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (modul) {
            const input = yield cp.group(questions_1.formQuestion, {
                onCancel: ({ results }) => {
                    cp.cancel('Operation cancelled.');
                    process.exit(0);
                },
            });
            const response = new From_1.Form({
                modul: modul,
                submodul: input.submodul,
                fields: input.parameters.split(','),
            });
            const s = cp.spinner();
            s.start('Waiting process...');
            yield (0, promises_1.setTimeout)(300);
            return s.stop(response._run().message);
        }
    }))();
});
p.command('table <modul>')
    .description('Generate Modul')
    .action((modul) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (modul) {
            const input = yield cp.group(questions_1.modulQuestion, {
                onCancel: ({ results }) => {
                    cp.cancel('Operation cancelled.');
                    process.exit(0);
                },
            });
            if (input.submodul) {
                const response = new Table_1.Table({
                    modul: modul,
                    submodul: input.submodul,
                });
                const s = cp.spinner();
                s.start('Waiting process...');
                yield (0, promises_1.setTimeout)(300);
                return s.stop(response._run().message);
            }
        }
    }))();
});
p.command('table-pagination <modul>');
p.command('page <modul>')
    .description('Create your page')
    .action((modul) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (modul) {
            const input = yield cp.group(questions_1.pageQuestion, {
                onCancel: ({ results }) => {
                    cp.cancel('Operation cancelled.');
                    process.exit(0);
                },
            });
            const response = new Page_1.Page({ modul: modul, fileName: input.filename });
            const s = cp.spinner();
            s.start('Waiting to process...');
            yield (0, promises_1.setTimeout)(3000);
            return s.stop(response._run().message);
            // return cp.outro(response._run().message);
        }
        return cp.outro('Modul is not found');
    }))();
});
p.command('create-project <modul>');
p.command('lang')
    .description('Select language')
    .action(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield cp.group(questions_1.langQuestion, {
            onCancel: ({ results }) => {
                cp.cancel('Operation cancelled.');
                process.exit(0);
            },
        });
        const s = cp.spinner();
        s.start('Installing via npm');
        yield (0, promises_1.setTimeout)(3000);
        s.stop('Installed via npm');
        cp.outro("You're all set!");
        yield (0, promises_1.setTimeout)(1000);
        console.log(res);
    }))();
});
p.parse(process.argv);
