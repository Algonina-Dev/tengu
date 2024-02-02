"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucwords = void 0;
function ucwords(str) {
    return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
    });
}
exports.ucwords = ucwords;
