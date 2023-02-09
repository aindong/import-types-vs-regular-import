import type { User } from './types';

function main() {
  const user: User = {
    name: 'John',
    age: 42,
    role: 'admin',
  };

  console.log(`Hello, ${user.name}!`);
  console.log(`You are ${user.age} years old.`);
  console.log(`role is ${user.role}!`);
}

main();
