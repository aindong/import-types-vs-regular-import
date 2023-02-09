"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function main() {
    const user = {
        name: 'John',
        age: 42,
        role: types_1.UserType.Admin,
    };
    console.log(`Hello, ${user.name}!`);
    console.log(`You are ${user.age} years old.`);
    console.log('enum check', types_1.UserType.Admin === 'admin');
}
main();
