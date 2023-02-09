"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function main() {
    const user = {
        name: 'John',
        age: 42,
        role: 'admin',
    };
    console.log(`Hello, ${user.name}!`);
    console.log(`You are ${user.age} years old.`);
    console.log(`role is ${user.role}!`);
    console.log('const check', types_1.UserTypeConst.Admin === 'admin');
}
main();
