"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const greetings_module_1 = require("./greetings_module");
const allGreetingFunctions = __importStar(require("./greetings_module"));
const greetings_utilities_module_1 = require("./greetings-utilities_module");
console.log(greetings_module_1.returnGreeting("Hola!")); // The message from Greetings_module is Hola!
console.log(allGreetingFunctions.returnGreeting("Ciao!")); // The message from Greetings_module is Ciao!
console.log(greetings_utilities_module_1.returnGreeting("Privet!")); // The message from GreetingsLength_module is Privet! It is 7 characters long.
