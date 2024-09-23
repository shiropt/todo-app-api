import { Todo } from '@prisma/client';
export type TodoData = Omit<
  Todo,
  'id' | 'createdAt' | 'updatedAt' | 'authorId'
>;

export const generateTodos = ({
  name,
  length,
}: {
  name: string;
  length: number;
}): TodoData[] => {
  return [...new Array(length)].map((_, i) => {
    return {
      title: `${name}’s Todo ${i + 1}`,
      description: `Description ${i + 1}`,
      status: 1,
      deadline: new Date('2021-10-10'),
    };
  });
};
