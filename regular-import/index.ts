import { User, UserType } from './types';

function main() {
  const user: User = {
    name: 'John',
    age: 42,
    role: UserType.Admin,
  };

  console.log(`Hello, ${user.name}!`);
  console.log(`You are ${user.age} years old.`);
  console.log('enum check', UserType.Admin === 'admin');
}

main();
