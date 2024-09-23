import { User } from '@prisma/client';
export type UserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export const userNames = ['Alice', 'Bob', 'Claire', 'David', 'Eve'];
