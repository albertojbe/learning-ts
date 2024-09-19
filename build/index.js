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
const interfaces_1 = __importDefault(require("./interfaces"));
let pessoa = {
    nome: "Alberto",
    idade: 17
};
let produto = {
    nome: "Banana",
    preco: 5.0,
    unidade: 50
};
const person = ["Alberto", 20, "solteiro"];
let nomes = ["Alberto", "Cesar"];
let infos = ["Alberto", 20];
console.log(person);
console.log(nomes);
console.log(infos);
console.log(infos.pop());
function test(retorno) {
    return retorno;
}
function getName(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return params;
    });
}
console.log(test(false));
(0, interfaces_1.default)();
