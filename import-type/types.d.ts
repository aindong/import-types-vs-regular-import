export type User = {
  name: string;
  age: number;
  role: UserType;
};

// export enum UserType {
//   Admin = 'admin',
//   Staff = 'staff',
//   Employee = 'employee',
// }

export const UserTypeConst = {
  Admin: 'admin',
  Staff: 'staff',
  Employee: 'employee',
} as const;

export type UserType = typeof UserTypeConst[keyof typeof UserTypeConst];
