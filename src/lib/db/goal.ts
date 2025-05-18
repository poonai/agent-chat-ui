import { PrismaClient, habit_plan } from "@prisma/client";
const prisma = new PrismaClient();

export const getGoals = async (userId: string): Promise<habit_plan[]> => {
  const goals = await prisma.habit_plan.findMany({
    where: {
      userId: userId
    },
    include: {
     check_in: true
    },
  });
  return goals;
};
