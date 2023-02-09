export type User = {
  name: string;
  age: number;
  role: UserType;
};

export enum UserType {
  Admin = 'admin',
  Staff = 'staff',
  Employee = 'employee',
}
